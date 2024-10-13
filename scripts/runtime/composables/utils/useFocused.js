import { useIntersectionObserver } from "./helpers.js";
import { ref, onMounted } from "#imports";
import { waitAfterTransition } from "./useDOM.js";
export const FocusedProps = {
  focused: {
    type: Boolean,
    default: void 0
  }
};
export function useFocused(props, elementRef) {
  const isIntersecting = ref(false);
  if (props.focused) {
    onMounted(() => {
      useIntersectionObserver(
        elementRef,
        async ([{ isIntersecting: entryIsIntersecting }]) => {
          isIntersecting.value = entryIsIntersecting;
          if (entryIsIntersecting && elementRef.value) {
            await waitAfterTransition(elementRef.value);
            await nextTick();
            elementRef.value.focus();
          }
        },
        {
          threshold: 0.1
        }
      );
    });
  }
  return {
    isIntersecting
  };
}
