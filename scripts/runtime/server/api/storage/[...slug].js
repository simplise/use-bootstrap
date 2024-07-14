import { defineEventHandler, useSession } from "h3";
import { pick, set } from "lodash-es";
import { joinURL, parseURL } from "ufo";
import { useRuntimeConfig } from "#imports";
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";
import httpDriver from "./custom-http.js";
import { createStorage } from "unstorage";
import { createError, readBody, setHeader } from "h3";
import JSONPatch from "jsonpatch";
import { defu } from "defu";
const memory = { value: void 0 };
export default defineEventHandler(async (event) => {
  const reqPath = event.path.slice("/api/storage/".length);
  const parsed = parseURL(reqPath);
  const pathes = parsed.pathname.split("/");
  const bind = pathes.shift();
  if (!bind) {
    throw createError({
      statusCode: 400,
      statusMessage: "Empty Key"
    });
  }
  setHeader(event, "Server-Storage-Bind", bind);
  const key = joinURL(pathes.join("/"), parsed.search);
  if (!key) {
    throw createError({
      statusCode: 400,
      statusMessage: "Empty Key"
    });
  }
  const forwordHeader = pick(event.node.req.headers, ["x-forwarded-for", "cache-control"]);
  const bindOption = await CreateBindOption(event, bind, forwordHeader);
  setHeader(event, "Server-Storage-Driver", bindOption.driver);
  return await useApiHandler(event, key, bindOption, forwordHeader);
});
async function CreateBindOption(event, bind, headers) {
  const runtimeConfig = useRuntimeConfig();
  const driverOption = runtimeConfig[bind];
  const moduleOption = runtimeConfig.public.usebootstrap;
  const bindOption = moduleOption.serverStorage.api[bind];
  let sessionId = "";
  if (bindOption.session) {
    const session = await useSession(event, {
      password: moduleOption.serverStorage.password,
      name: "nss",
      maxAge: 60 * 60 * 24 * 365,
      // 365 days
      cookie: {
        sameSite: "lax",
        httpOnly: true
        // secure: true,
      }
    });
    sessionId = session.id ?? "";
  }
  switch (bindOption.driver) {
    case "cloudflare-kv-binding":
      return {
        storage: createStorage({
          driver: cloudflareKVBindingDriver(driverOption)
        }),
        keyPrefix: sessionId,
        driver: bindOption.driver,
        fallback: bindOption.fallback,
        driverOption
      };
    case "http": {
      const or = {
        headers
      };
      if (bindOption.session) {
        set(or.headers, "session-id", sessionId);
      }
      const doption = defu(or, driverOption);
      return {
        storage: createStorage({
          driver: httpDriver(doption)
        }),
        keyPrefix: "",
        driver: bindOption.driver,
        fallback: bindOption.fallback,
        driverOption: doption
      };
    }
    default: {
      if (memory.value == void 0) {
        memory.value = createStorage();
      }
      return {
        storage: memory.value,
        keyPrefix: `_${bind}_${sessionId}/`,
        driver: bindOption.driver,
        fallback: bindOption.fallback,
        driverOption
      };
    }
  }
}
export async function useApiHandler(event, key, bind, headers) {
  if (!bind.storage) {
    throw createError({
      statusCode: 400,
      statusMessage: "CreateStorage Failed"
    });
  }
  setHeader(event, "Server-Storage-Key", key);
  const itemKey = `${bind.keyPrefix}${key}`;
  switch (event.method) {
    case "GET": {
      const result = getItem(itemKey, bind, headers);
      if (!result && bind.fallback) {
        const fallbackStorage = await CreateBindOption(event, bind.fallback, headers);
        const fallbackResult = await fallbackStorage.storage.getItem(itemKey);
        await bind.storage.setItem(itemKey, fallbackResult);
        return fallbackResult;
      }
      return result;
    }
    case "PUT": {
      const body = await readBody(event);
      await bind.storage.setItem(itemKey, body);
      return;
    }
    case "DELETE": {
      await bind.storage.removeItem(itemKey);
      return;
    }
    case "POST": {
      switch (bind.driver) {
        default: {
          const body = await readBody(event);
          const pheader = defu(bind.driverOption.headers, headers);
          const result = await $fetch(
            "",
            {
              method: "POST",
              headers: pheader,
              body
            }
          );
          return result;
        }
      }
    }
    case "PATCH": {
      const body = await readBody(event) || {};
      const json = JSON.parse(body);
      const base = await bind.storage.getItem(itemKey) || {};
      const result = JSONPatch.apply_patch(base, json);
      const value = JSON.stringify(result);
      await bind.storage.setItem(itemKey, value);
      return;
    }
  }
}
export async function getItem(itemKey, bind, headers) {
  switch (bind.driver) {
    case "http": {
      const p = joinURL(bind.driverOption.base, itemKey.replace(/:/g, "/"));
      const value = await $fetch(p, {
        headers: defu(bind.driverOption.headers, headers)
      });
      return value;
    }
    default:
      return await bind.storage.getItem(itemKey);
  }
}
