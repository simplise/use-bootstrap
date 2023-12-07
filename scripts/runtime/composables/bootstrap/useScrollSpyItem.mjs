import { computed, inject, ref, watch, nextTick } from "vue";
import { useIntersectionObserver } from "../../utils/helpers.mjs";
import { findOneSelectorRef } from "../../utils/useDOM.mjs";
import { unrefElement } from "../../utils/helpers.mjs";
export function useScrollSpyItem(props, elementRef) {
  const spy = inject("spy.spy", void 0);
  if (!spy) {
    return {};
  }
  if (!props.target && !props.href) {
    return {};
  }
  const targetIsVisible = ref(false);
  const target = findOneSelectorRef(props.target || props.href);
  const refresh = inject("refresh.spy", () => {
  });
  const registerSpyItem = inject(
    "registerItem.spy",
    (id) => {
      id;
    }
  );
  watch(elementRef, () => {
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    registerSpyItem(element.id);
  });
  useIntersectionObserver(target, async ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting;
    await nextTick();
    refresh();
  });
  return {
    attr: computed(() => {
      return {
        "data-bv-spy-visible": targetIsVisible.value
      };
    })
  };
}
