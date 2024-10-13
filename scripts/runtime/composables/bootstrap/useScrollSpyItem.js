import { useIntersectionObserver, unrefElement } from "../utils/helpers.js";
import { findOneSelectorRef } from "../utils/useDOM.js";
import { computed, inject, ref, watch, nextTick } from "#imports";
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
  const registerSpyItem = inject("registerItem.spy", (id) => {
    return id;
  });
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
  const spyElem = findOneSelectorRef(spy.value);
  const onClick = (event) => {
    if (spyElem.value && target.value) {
      event.preventDefault();
      const top = target.value?.offsetTop - spyElem.value.offsetTop;
      spyElem.value.scrollTo({ top, behavior: "smooth" });
      return false;
    }
  };
  return {
    event: {
      onClick
    },
    attr: computed(() => {
      return {
        "data-bv-spy-visible": targetIsVisible.value
      };
    })
  };
}
