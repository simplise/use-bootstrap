<template>
 <Suspense
  suspensible
 >
  <slot
   :key="slotKey"
   :data="data"
   :status="status"
   :update="update"
   :set="set"
   :reload="reload"
   :sync-result="syncResult"
   :sync-status="syncStatus"
   :validate="validate"
   :validation-result="validationResult"
  />
  <template #fallback>
   <Spinner sm />
  </template>
 </Suspense>
</template>

<script setup lang="ts">
//
import { uniqueId } from 'lodash-es';
import { ViewStateProps, useViewState } from '../../composables/viewState/useViewState';
// import { usePropsKey } from '../../composables/viewState/usePropsKey'; //Key はViewStateコンポーネント利用時に指定する必要がある 2024/8/10
import { ref, watch, onUnmounted } from '#imports';
//
const props = defineProps({
 ...ViewStateProps,
});
//
defineOptions({
 inheritAttrs: false,
});
//
const schemaValidator = props.schemaSrc ? await useViewState({ src: props.schemaSrc }) : undefined;
const { data, status, update, set, reload, syncStatus, syncResult, validate, validationResult, pause } = await useViewState(props, schemaValidator?.data?.value);
//
// const key = usePropsKey(props);
//
const slotKey = ref<string>(uniqueId());
watch([status], (_) => {
 slotKey.value = uniqueId();
});
//
onUnmounted(async () => await pause());
// プロパティのModel対応 未完成
// const models = reactive(data.value)
// const models = reactive(new Proxy({}, {
//     get(target, prop) {
//       return prop in target ? target[prop] : () => '';
//     },
//     set(target, prop, value) {
//       target[prop] = value;
//       return true;
//     }
//   })
// );
// Object.assign(models, data.value)
// watch(models, (newValue) => {
//   update(newValue)
// })
</script>
