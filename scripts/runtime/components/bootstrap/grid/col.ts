import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsGridCol',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  col: {
   type: [Boolean, String, Number],
   default: true,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  return () => h(props.tag, hProps(block), context.slots);
 },
});
