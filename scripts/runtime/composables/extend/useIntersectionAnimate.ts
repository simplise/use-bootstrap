import type { SetupContext, Ref } from 'vue';
import { delay, useIntersectionObserver, watchOnce } from '../utils/helpers';
import { findOneSelectorRef } from '../utils/useDOM';
import { computed, ref, nextTick } from '#imports';
//
export const IntersectionAnimateProps = {
 intersection: {
  type: Boolean,
 },
 intersectionMargin: {
  type: String,
  default: '0',
 },
 intersectionTarget: {
  type: String,
 },
 animateIn: {
  type: String,
  default: 'fadeIn',
 },
};

//
export interface IIntersectionAnimateProps {
 once?: boolean;
 intersection?: boolean;
 animateIn?: string;
 intersectionMargin?: string;
 intersectionTarget?: string;
}

//
export function useIntersectionAnimate<P extends IIntersectionAnimateProps>(
 props: P,
 _context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const targetIsVisible = ref(false);
 const invisible = ref(true);
 const inAnimate = ref(false);
 const root = props.intersectionTarget
  ? findOneSelectorRef(props.intersectionTarget)
  : undefined;
 //
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
    await delay(3000);
   }
   await nextTick();
   inAnimate.value = false;
  },
  {
   root: root,
   rootMargin: props.intersectionMargin,
  },
 );
 //
 watchOnce(targetIsVisible, () => {
  stop();
 });

 return {
  class: computed(() => {
   return {
    animate__animated: inAnimate.value,
    [`animate__${props.animateIn}`]: targetIsVisible.value && props.animateIn,
    invisible: invisible.value,
   };
  }),
 };
}
