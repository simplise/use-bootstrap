import { computed } from "vue";
import { useEventBus } from "@vueuse/core";
import { useIDRef } from "../composables/attributes/useID.mjs";
export function useEventTarget(props, elementRef) {
  const eid = useIDRef(props, elementRef);
  const exposeEventBus = computed(() => useEventBus(`expose_${eid.value}`));
  function emit(event, payload) {
    exposeEventBus.value.emit(event, payload);
  }
  return {
    emit
  };
}
