import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCarouselInner',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'carousel-inner': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
