import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsFlex',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  flex: {
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
