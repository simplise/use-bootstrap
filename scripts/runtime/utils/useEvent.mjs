import { provide, computed, onMounted } from "vue";
import { useEventBus } from "@vueuse/core";
import { forOwn } from "./helpers.mjs";
import { useIDRef } from "../composables/attributes/useID.mjs";
export function useEvent(props, elementRef, eventSuffix) {
  const eid = useIDRef(props, elementRef);
  const exposeEventBus = computed(() => useEventBus(
    `expose_${eid.value}`
  ));
  const emitEventBus = computed(() => useEventBus(
    `emit_${eid.value}`
  ));
  function expose(exposed) {
    forOwn(exposed, (value, key) => {
      provide(`${key}.${eventSuffix}`, value);
    });
    onMounted(() => {
      exposeEventBus.value.on((event, ...args) => {
        return exposed[event] ? exposed[event](args) : void 0;
      });
    });
    return exposed;
  }
  function emit(context, event, payload) {
    context.emit(event, payload);
    emitEventBus.value.emit(event, payload);
  }
  function exposeState(state) {
    forOwn(state, (value, key) => {
      provide(`${key}.${eventSuffix}`, value);
    });
    onMounted(() => {
      exposeEventBus.value.on((event, payload) => {
        if (state[event] && payload) {
          state[event].value = payload;
        }
      });
    });
  }
  return {
    emit,
    expose,
    exposeState
  };
}
