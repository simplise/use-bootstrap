import { defineDriver } from "unstorage";
import { $fetch as _fetch } from "ofetch";
import { joinURL } from "ufo";
const DRIVER_NAME = "custom-http";
export default defineDriver((opts) => {
  const r = (key = "") => joinURL(opts.base, key.replace(/:/g, "/"));
  const rBase = (key = "") => joinURL(opts.base, (key || "/").replace(/:/g, "/"), ":");
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key, topts) {
      return _fetch(r(key), {
        method: "HEAD",
        headers: { ...opts.headers, ...topts.headers }
      }).then(() => true).catch(() => false);
    },
    async getItem(key, tops = {}) {
      const p = r(key);
      const value = await _fetch(p, {
        headers: { ...opts.headers, ...tops.headers }
      });
      return value;
    },
    async getItemRaw(key, topts) {
      const p = r(key);
      const value = await _fetch(p, {
        headers: {
          accept: "application/octet-stream",
          ...opts.headers,
          ...topts.headers
        }
      });
      return value;
    },
    async getMeta(key, topts) {
      const res = await _fetch.raw(r(key), {
        method: "HEAD",
        headers: { ...opts.headers, ...topts.headers }
      });
      let mtime = void 0;
      const _lastModified = res.headers.get("last-modified");
      if (_lastModified) {
        mtime = new Date(_lastModified);
      }
      return {
        status: res.status,
        mtime
      };
    },
    async setItem(key, value, topts) {
      await _fetch(r(key), {
        method: "PUT",
        body: value,
        headers: { ...opts.headers, ...topts?.headers }
      });
    },
    async setItemRaw(key, value, topts) {
      await _fetch(r(key), {
        method: "PUT",
        body: value,
        headers: {
          "content-type": "application/octet-stream",
          ...opts.headers,
          ...topts.headers
        }
      });
    },
    async removeItem(key, topts) {
      await _fetch(r(key), {
        method: "DELETE",
        headers: { ...opts.headers, ...topts.headers }
      });
    },
    async getKeys(base, topts) {
      const value = await _fetch(rBase(base), {
        headers: { ...opts.headers, ...topts.headers }
      });
      return Array.isArray(value) ? value : [];
    },
    async clear(base, topts) {
      await _fetch(rBase(base), {
        method: "DELETE",
        headers: { ...opts.headers, ...topts.headers }
      });
    }
  };
});
