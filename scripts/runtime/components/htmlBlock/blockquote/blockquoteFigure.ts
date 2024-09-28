import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsBlockquoteFigure',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'figure',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  return () => h('figure', hProps(block), context.slots);
 },
});
