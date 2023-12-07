import { nextTick, ref, computed } from "vue";
import { useEventTarget } from "../../utils/useEventTarget.mjs";
import { useEvent } from "../../utils/useEvent.mjs";
import {
  unrefElement
} from "../../utils/helpers.mjs";
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
  const refresh = async () => {
    if (items.value.length == 0 || !props.spy) {
      return;
    }
    await nextTick();
    const selector = items.value.map((item) => `#${item}[data-bv-spy-visible='true']`).join(",");
    const element = unrefElement(elementRef);
    const dom = element?.querySelector(selector);
    if (dom) {
      current.value = dom.id;
      emit("current", dom.id);
      context.emit("currentChanged", dom.id);
      await nextTick();
    } else {
      current.value = "";
    }
  };
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
