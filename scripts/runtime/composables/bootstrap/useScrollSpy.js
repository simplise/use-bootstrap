import { useEventTarget } from "../utils/useEventTarget.js";
import { useEvent } from "../utils/useEvent.js";
import {
  unrefElement,
  useDebounceFn
} from "../utils/helpers.js";
import { ref, computed } from "#imports";
export const ScrollSpyProps = {
  spy: {
    type: String
  }
};
export function useScrollSpy(props, context, elementRef) {
  if (!props.spy) {
    return {};
  }
  const items = ref([]);
  const { exposeState, expose } = useEvent(props, elementRef, "spy");
  const { emit } = useEventTarget(props, elementRef);
  const current = ref("");
  const refresh = useDebounceFn(() => {
    if (items.value.length == 0 || !props.spy) {
      return;
    }
    const selector = items.value.map((item) => `#${item}[data-bv-spy-visible='true']`).join(",");
    const element = unrefElement(elementRef);
    const dom = element?.querySelector(selector);
    if (dom) {
      current.value = dom.id;
      emit("current", dom.id);
      context.emit("currentChanged", dom.id);
    } else {
      current.value = "";
    }
  }, 100);
  const registerItem = async (id) => {
    items.value.push(id);
  };
  const method = expose({
    refresh,
    registerItem
  });
  exposeState({
    spy: ref(props.spy)
  });
  return {
    method,
    attr: computed(() => {
      return {
        "data-debug-spy-current": current.value
      };
    })
  };
}
