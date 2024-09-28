import type { Ref } from 'vue';
import { useIntersectionObserver, unrefElement } from '../utils/helpers';
import { findOneSelectorRef } from '../utils/useDOM';
import type { IEventEmitProps } from '../utils/useEventEmitter';
import { computed, inject, ref, watch, nextTick } from '#imports';

export interface IScrollSpyState {
 targetIsVisible: Ref<boolean>;
}
//
export function useScrollSpyItem<P extends IEventEmitProps>(
 props: P,
 elementRef: Ref<HTMLElement>,
) {
 //
 const spy = inject<Ref<string> | undefined>('spy.spy', undefined);
 //
 if (!spy) {
  return {};
 }
 if (!props.target && !props.href) {
  return {};
 }
 //
 const targetIsVisible = ref(false);
 const target = findOneSelectorRef(props.target || props.href);
 const refresh = inject('refresh.spy', () => {});
 //
 const registerSpyItem = inject('registerItem.spy', (id: string) => {
  return id;
 });

 watch(elementRef, () => {
  const element = unrefElement<HTMLElement>(elementRef); // for NuxtLink
  if (!element) {
   return;
  }
  registerSpyItem(element.id);
 });
 //
 useIntersectionObserver(target, async ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting;
  await nextTick();
  refresh();
 });
 //
 const spyElem = findOneSelectorRef(spy.value);
 //
 const onClick = (event: Event) => {
  // https://github.com/twbs/bootstrap/blob/main/js/src/scrollspy.js
  // target.value?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })
  if (spyElem.value && target.value) {
   event.preventDefault();
   // event.stopPropagation()
   const top = target.value?.offsetTop - spyElem.value.offsetTop;
   spyElem.value.scrollTo({ top, behavior: 'smooth' });
   return false;
  }
 };
 //
 return {
  event: {
   onClick,
  },
  attr: computed(() => {
   return {
    'data-bv-spy-visible': targetIsVisible.value,
   };
  }),
 };
}
