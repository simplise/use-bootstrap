import { delay, useIntersectionObserver, watchOnce } from "../utils/helpers.js";
import { findOneSelectorRef } from "../utils/useDOM.js";
import { computed, ref, nextTick } from "#imports";
export const IntersectionAnimateProps = {
  intersection: {
    type: Boolean
  },
  intersectionMargin: {
    type: String,
    default: "0"
  },
  intersectionTarget: {
    type: String
  },
  animateIn: {
    type: String,
    default: "fadeIn"
  }
};
export function useIntersectionAnimate(props, _context, elementRef) {
  const targetIsVisible = ref(false);
  const invisible = ref(true);
  const inAnimate = ref(false);
  const root = props.intersectionTarget ? findOneSelectorRef(props.intersectionTarget) : void 0;
  const { stop } = useIntersectionObserver(
    elementRef,
    async ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
      inAnimate.value = true;
      await nextTick();
      if (isIntersecting) {
        invisible.value = false;
        stop();
        await nextTick();
        await delay(3e3);
      }
      await nextTick();
      inAnimate.value = false;
    },
    {
      root,
      rootMargin: props.intersectionMargin
    }
  );
  watchOnce(targetIsVisible, () => {
    stop();
  });
  return {
    class: computed(() => {
      return {
        animate__animated: inAnimate.value,
        [`animate__${props.animateIn}`]: targetIsVisible.value && props.animateIn,
        invisible: invisible.value
      };
    })
  };
}
