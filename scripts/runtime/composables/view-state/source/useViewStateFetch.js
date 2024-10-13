import { useState, ref, onNuxtReady, nextTick } from "#imports";
export function useViewStateFetch(prop) {
  const model = useState(prop.stateKey, () => prop.default ?? {});
  const updated = useState(prop.updateStateKey, () => false);
  const fetched = useState(prop.fetchedStateKey, () => false);
  const status = useState(prop.statusStateKey, () => 0);
  const syncStatus = ref(0);
  const syncResult = ref(void 0);
  const isMounted = ref(false);
  onNuxtReady(async () => {
    isMounted.value = true;
    if (!fetched.value) {
      await reload();
    }
  });
  const reload = async (force) => {
    if (!fetched.value || force) {
      updated.value = false;
      fetched.value = true;
      status.value = 100;
      const currentStatus = ref(100);
      const response = await $fetch(prop.url, {
        retry: 10,
        retryDelay: 1e3,
        ignoreResponseError: true,
        async onResponse(context) {
          currentStatus.value = context?.response?.status || 400;
        }
      });
      model.value = response;
      status.value = currentStatus.value;
      await nextTick();
    }
  };
  const sync = async () => {
    if (updated.value && prop.option.sync) {
      updated.value = false;
      syncStatus.value = 100;
      const response = await $fetch(prop.url, {
        method: prop.option.sync.method,
        body: model.value,
        ignoreResponseError: true,
        async onResponse(context) {
          syncStatus.value = context.response?.status || 400;
        }
      });
      syncResult.value = response;
    }
  };
  return {
    model,
    updated,
    reload,
    status,
    sync,
    syncStatus,
    syncResult
  };
}
