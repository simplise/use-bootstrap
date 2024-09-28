import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { IDProps, useID } from '../../../composables/attributes/useID';
import {
 CarouselActiveProps,
 useCarouselActive,
} from '../../../composables/bootstrap/useCarouselActive';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsCarouselItem',
 props: {
  ...BlockProps,
  ...CarouselActiveProps,
  ...IDProps,
  tag: {
   type: String,
   default: 'div',
  },
  interval: {
   type: [Number, String],
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'carousel-item'); // for useCarouselActive
  const carouselItem = useCarouselActive(props, elementRef, 'carousel');
  //
  const current = {
   class: {
    'carousel-item': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(id, current, carouselItem, block), context.slots);
 },
});
