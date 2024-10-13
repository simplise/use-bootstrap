import { useEvent } from "../utils/useEvent.js";
import { computed, ref, toRef, watch } from "#imports";
export const CurrentProps = {
  current: {
    type: String,
    default: ""
  },
  parent: {
    type: Boolean,
    default: true
  }
};
export function useItemsCurrent(props, context, elementRef, eventSuffix) {
  if (!props.parent) {
    return {};
  }
  const parent = toRef(props, "parent");
  const current = ref(props.current || "");
  const { exposeState } = useEvent(props, elementRef, eventSuffix);
  exposeState({ current, parent });
  watch(current, () => {
    context.emit("currentChanged", current.value);
  });
  watch(
    () => props.current,
    () => {
      if (props.current) {
        current.value = props.current;
      }
    }
  );
  return {
    attr: computed(() => {
      return {
        "data-bv-current": current.value
      };
    })
  };
}
