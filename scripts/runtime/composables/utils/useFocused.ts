// useFocus.ts
import type { Ref } from 'vue';
import { useIntersectionObserver, delay } from './helpers';
import { ref, onMounted } from '#imports';
import { waitAfterTransition } from './useDOM';

export const FocusedProps = {
 focused: {
  type: Boolean,
  default: undefined,
 },
};
//
export interface IFocusedProps {
 focused?: boolean;
}

export function useFocused<P extends IFocusedProps>(
 props: P,
 elementRef: Ref<HTMLElement | null>) {
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
     threshold: 0.1,
    },
   );
  });
 }

 return {
  isIntersecting,
 };
}
