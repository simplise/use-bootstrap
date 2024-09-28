import { hProps, hSlots, exposeMethods } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useCarousel, CarouselProps } from '../../../composables/bootstrap/useCarousel';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsCarousel',
 props: {
  ...BlockProps,
  ...CarouselProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const carousel = useCarousel(props, elementRef, 'carousel');
  //
  exposeMethods(context, carousel, block);
  //
  const current = {
   class: {
    carousel: true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(
    props.tag,
    hProps(current, carousel, block),
    hSlots(
     carousel.renderIndicators,
     context.slots.default,
     carousel.renderControl,
    ),
   );
 },
});
