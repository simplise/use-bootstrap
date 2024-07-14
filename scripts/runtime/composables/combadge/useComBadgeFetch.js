import { useFetch, useState, navigateTo } from "#imports";
import { nextTick } from "vue";
import { watchWithFilter, debounceFilter } from "@vueuse/core";
import { useValidate } from "./useValidate.js";
import { useCombadgeValidState } from "./useCombadgeValid.js";
import { useTransform } from "./useTransform.js";
export async function useCombadgeFetch(prop) {
  const model = useState(prop.stateKey, () => prop.default ?? {});
  const updated = useState(prop.updateStateKey, () => false);
  const fetched = useState(prop.fetchedStateKey, () => false);
  const reload = async (force) => {
    if (!fetched.value || force) {
      const response = await $fetch(prop.url, {
        retry: 10,
        retryDelay: 1e3
        // timeout: 1000,
        // ignoreResponseError: true
        // lazy: prop.lazy,
        // server: prop.server,
        // immediate: prop.immediate,
        // default: () => prop.default ?? {}
      }).catch(async (err) => {
        switch (err.statusCode) {
          case 401:
            if (prop.unauthorizedTo) {
              await navigateTo(prop.unauthorizedTo);
            }
            console.log(err);
            break;
        }
      });
      if (prop.transform) {
        model.value = useTransform(response, prop.transform);
      } else {
        model.value = response;
      }
      updated.value = false;
      fetched.value = true;
      await nextTick();
    }
  };
  await reload();
  const validate = useValidate(
    prop
    /*, model*/
  );
  const put = async (newValue) => {
    await nextTick();
    if (updated.value) {
      updated.value = false;
      validate();
      const valid = useCombadgeValidState(prop.src);
      if (valid.value) {
        const apiSetOption = prop.option.set;
        await useFetch(prop.url, {
          method: apiSetOption.method,
          body: JSON.stringify(newValue)
        });
      }
    }
  };
  if (prop.option.set) {
    const apiSetOption = prop.option.set;
    if (apiSetOption) {
      watchWithFilter(
        model,
        async (newValue) => {
          await put(newValue);
        },
        {
          eventFilter: debounceFilter(apiSetOption.delay, { maxWait: apiSetOption.maxWait })
        }
      );
    }
  }
  return {
    model,
    updated,
    reload
  };
}
export async function useCombadgeFetchReload(prop) {
  const baseModel = useState(prop.stateKey);
  const updated = useState(prop.updateStateKey, () => false);
  const fetched = useState(prop.fetchedStateKey, () => false);
  const response = await useFetch(prop.url);
  if (prop.option.transform) {
    baseModel.value = useTransform(response.data.value, prop.option.transform);
  } else {
    baseModel.value = response.data.value;
  }
  fetched.value = true;
  updated.value = false;
}
