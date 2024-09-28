import type { Ref } from 'vue';
import {
 useEventEmitter,
 EventEmitProps,
 type IEventEmitProps,
} from '../utils/useEventEmitter';
import type { IIDProps } from '../attributes/useID';
import { addProp, hasValue } from '../../composables/utils/useProps';
import { ref, computed, inject, h, watch } from '#imports';

export const CarouselControlProps = {
 slide: {
  type: String, // prev , next
 },
 slideTo: {
  type: [String, Number], // slide index number
 },
 control: {
  type: Boolean,
 },
 ...EventEmitProps,
};

export interface ICarouselControlProps extends IEventEmitProps {
 slide?: string;
 slideTo?: string | number;
 control: boolean;
}

interface IProps extends ICarouselControlProps, IIDProps { }

export function useCarouselControl<P extends IProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 if (!props.slide && !hasValue(props.slideTo)) {
  return {};
 }
 //
 const active = ref(false);
 const current = inject<Ref<string> | undefined>(
  `nextCurrent.carousel`,
  undefined,
 );
 //
 const slideEmitter = useEventEmitter(
  props,
  props.slide || 'to',
  'carousel',
  elementRef,
 );
 //
 if (current) {
  watch(
   current,
   (next) => {
    if (next == props.slideTo) {
     active.value = true;
    }
    else {
     active.value = false;
    }
   },
   { immediate: true },
  );
 }
 //
 const slide = async () => {
  if (props.slide) {
   await slideEmitter();
  }
  else {
   await slideEmitter(props.slideTo);
  }
 };
 //
 return {
  class: computed(() => {
   return {
    active: active.value,
    [`carousel-control-${props.slide}`]: props.control,
   };
  }),
  attr: computed(() => {
   return {
    type: 'button',
    ...addProp(props.href, 'href', props.href),
    ...addProp(props.target, 'target', props.target),
    ['data-bs-target']: true,
   };
  }),
  method: {
   slide,
  },
  event: {
   onClick: slide,
  },
  renderControl: () => [
   h('span', {
    'class': {
     [`carousel-control-${props.slide}-icon`]: true,
    },
    'aria-hidden': 'true',
   }),
   h(
    'span',
    {
     class: {
      'visually-hidden': true,
     },
    },
    props.slide == 'prev' ? 'Previous' : 'Next',
   ),
  ],
 };
}
