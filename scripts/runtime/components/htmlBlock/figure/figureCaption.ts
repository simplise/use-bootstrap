import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsFigureCaption',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'figcaption',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'figure-caption': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
