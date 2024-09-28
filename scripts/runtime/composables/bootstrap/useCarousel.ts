import type { Ref } from 'vue';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import {
 querySelectorToID,
 waitAfterTransition,
 reflow,
} from '../utils/useDOM';
import carouselIndicators from '../../components/bootstrap/carousel/carouselIndicators';
import carouselIndicatorsButton from '../../components/bootstrap/carousel/carouselIndicatorsButton';
import carouselControl from '../../components/bootstrap/carousel/carouselControl';
import { isTrue, toNum } from '../../composables/utils/useProps';
import {
 isNumber,
 unrefElement,
 useCycleList,
 useIntervalFn,
 useElementVisibility,
 useSwipe,
 whenever,
 isArray,
} from '../utils/helpers';
import { computed, nextTick, ref, onMounted, watch, h } from '#imports';

export const CarouselProps = {
 current: {
  type: String,
 },
 slide: {
  type: Boolean,
  default: true,
 },
 interval: {
  type: [String, Number, Boolean],
  default: 5000,
 },
 fade: {
  type: Boolean,
 },
 dark: {
  type: Boolean,
 },
 touch: {
  type: [Boolean, String],
  default: true,
 },
 control: {
  type: Boolean,
 },
 indicators: {
  type: Boolean,
 },
};
//
export interface ICarouselProps {
 current?: string;
 slide?: boolean;
 interval?: string | number | boolean;
 fade?: boolean;
 dark?: boolean;
 touch?: boolean | string;
 control?: boolean;
 indicators?: boolean;
}
//
export interface ICarouselState {
 current: Ref<string>;
}
//
interface IProps extends ICarouselProps, IIDProps {}
//
export function useCarousel<P extends IProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
 eventSuffix: string,
) {
 //
 const selector = '.carousel-item';
 //
 const current = ref(props.current || ''); // active item
 const nextItem = ref('');
 const nextCurrent = ref(props.current || ''); //
 const sliding = ref(false);
 const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
 const targetIsVisible = useElementVisibility(elementRef); // 可視状態の取得
 // const { } = usePointerSwipe(elementRef); //マウススワイプ対応
 const { isSwiping, direction } = useSwipe(elementRef); //
 //
 const interval = ref(isNumber(props.interval) ? toNum(props.interval) : 0);
 const {
  pause,
  resume: cycle,
  isActive: isCycling,
 } = useIntervalFn(async () => {
  await next();
 }, interval);
 const slideList = ref<Array<string>>([]);

 // 可視領域外でサイクルを停止
 if (props.slide && props.interval) {
  watch(
   targetIsVisible,
   () => {
    if (targetIsVisible.value) {
     cycle();
    }
    else {
     pause();
    }
   },
   { immediate: true },
  );
 }
 //
 if (isTrue(props.touch)) {
  whenever(isSwiping, async () => {
   pause();
   switch (direction.value) {
    case 'left':
     await next();
     break;
    case 'right':
     await prev();
     break;
   }
   cycle();
  });
 }
 //
 const getItems = () => {
  const element = unrefElement(elementRef) as HTMLElement;
  const list = querySelectorToID(selector, { element });
  const { state, next, prev } = useCycleList(list);
  state.value = current.value;
  return { state, next, prev };
 };
 //
 const next = async () => {
  nextItem.value = getItems().next();
  await slide(true);
 };
 //
 const prev = async () => {
  nextItem.value = getItems().prev();
  await slide(false);
 };
 //
 const to = async (target: number | string | unknown[]) => {
  const activeIndex = slideList.value.indexOf(current.value);
  let index;
  if (isNumber(target)) {
   index = Number(target);
   nextItem.value = slideList.value[index];
  }
  if (isArray(target)) {
   index = Number(target[0]);
   nextItem.value = slideList.value[index];
  }
  else {
   index = slideList.value.indexOf(target.toString());
   nextItem.value = target.toString();
  }
  if (index == activeIndex) {
   return;
  }
  await slide(activeIndex < index);
 };
 //
 const slide = async (isNext: boolean) => {
  if (sliding.value) {
   return;
  }

  if (isCycling.value) {
   pause();
  }
  nextCurrent.value = nextItem.value;
  const activeElement = document.getElementById(current.value);
  const nextElement = document.getElementById(nextItem.value);

  const directionalClassName = isNext
   ? 'carousel-item-start'
   : 'carousel-item-end';
  const orderClassName = isNext ? 'carousel-item-next' : 'carousel-item-prev';

  if (!nextElement || !activeElement) {
   return;
  }

  sliding.value = true;

  if (props.slide) {
   nextElement.classList.add(orderClassName);
   await reflow(nextElement);
   activeElement.classList.add(directionalClassName);
   nextElement.classList.add(directionalClassName);
   await waitAfterTransition(activeElement, true);
   nextElement.classList.remove(directionalClassName, orderClassName);
   activeElement.classList.remove(orderClassName, directionalClassName);
  }
  current.value = nextItem.value;
  nextItem.value = '';
  sliding.value = false;
  await nextTick(); // interval
  if (props.interval) {
   cycle();
  }
 };
 //
 onMounted(() => {
  if (!current.value) {
   const element = unrefElement(elementRef) as HTMLElement;
   slideList.value = querySelectorToID(selector, { element });
   if (slideList.value.length > 0) {
    current.value = slideList.value[0];
    nextCurrent.value = current.value;
   }
  }
 });
 //
 const method = expose({
  next,
  prev,
  pause,
  cycle,
  to,
 });
 //
 exposeState<ICarouselState>({
  current,
  nextCurrent,
  interval,
 });
 //
 return {
  class: computed(() => {
   return {
    'slide': props.slide,
    'carousel-fade': props.fade,
    'carousel-dark': props.dark,
   };
  }),
  attr: computed(() => {
   return {
    'data-bv-current': current.value,
   };
  }),
  method,
  renderIndicators: () => {
   if (props.indicators) {
    return h(carouselIndicators, {}, () =>
     slideList.value.map((listItem) => {
      return h(
       carouselIndicatorsButton,
       {
        slideTo: listItem,
       },
       undefined,
      );
     }),
    );
   }
   else {
    return undefined;
   }
  },
  renderControl: () => {
   if (props.control) {
    return [
     h(
      carouselControl,
      {
       slide: 'prev',
      },
      undefined,
     ),
     h(
      carouselControl,
      {
       slide: 'next',
      },
      undefined,
     ),
    ];
   }
   else {
    return undefined;
   }
  },
 };
}
