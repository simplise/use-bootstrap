import { useIDRef } from "../attributes/useID.js";
import { useEventBus } from "./helpers.js";
import { computed } from "#imports";
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
