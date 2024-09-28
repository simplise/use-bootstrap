import type { FetchContext } from 'ofetch';
import type {
 IViewStateSourceProps,
 IViewStateSourceResult,
} from '../useViewState';
import { useState, ref, onNuxtReady, nextTick } from '#imports';
//
export function useViewStateFetch(
 prop: IViewStateSourceProps,
): IViewStateSourceResult {
 //
 const model = useState(prop.stateKey, () => prop.default ?? {});
 const updated = useState(prop.updateStateKey, () => false);
 const fetched = useState(prop.fetchedStateKey, () => false);
 const status = useState(prop.statusStateKey, () => 0);
 const syncStatus = ref(0);
 const syncResult = ref<unknown>(undefined);
 //
 const isMounted = ref(false);
 onNuxtReady(async () => {
  isMounted.value = true;
  if (!fetched.value) {
   await reload();
  }
 });
 //
 const reload = async (force?: boolean) => {
  if (!fetched.value || force) {
   updated.value = false;
   fetched.value = true;
   status.value = 100;
   const currentStatus = ref(100);
   const response = await $fetch(prop.url, {
    retry: 10,
    retryDelay: 1000,
    ignoreResponseError: true,
    async onResponse(context: FetchContext<unknown>) {
     currentStatus.value = context?.response?.status || 400;
    },
   });
   model.value = response;
   status.value = currentStatus.value; // model 変更後に変更する
   // }
   await nextTick();
  }
 };
 // // --- Start Async ---
 // if (prop.server) {
 //  await reload();
 // }
 //
 const sync = async () => {
  // await nextTick()
  if (updated.value && prop.option.sync) {
   updated.value = false;
   syncStatus.value = 100;
   const response = await $fetch(prop.url, {
    method: prop.option.sync.method,
    body: model.value,
    ignoreResponseError: true,
    async onResponse(context: FetchContext<unknown>) {
     syncStatus.value = context.response?.status || 400;
    },
   });
   syncResult.value = response;
   // }
  }
 };
 //
 return {
  model,
  updated,
  reload,
  status,
  sync,
  syncStatus,
  syncResult,
 };
}
