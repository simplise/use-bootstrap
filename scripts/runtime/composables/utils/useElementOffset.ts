import type { MaybeElementRef } from '@vueuse/core';
import { useElementBounding } from '../utils/helpers';
import { computed } from '#imports';

// 参考
// bootstrap manipulator.js
// https://vueuse.org/useElementBounding

export function useElementOffset(target: MaybeElementRef) {
 const bounding = useElementBounding(target);

 const left = computed(() => bounding.left.value + window.pageXOffset);
 const top = computed(() => bounding.top.value + window.pageYOffset);

 return {
  left,
  top,
 };
}

export type UseElementOffsetReturn = ReturnType<typeof useElementOffset>;
