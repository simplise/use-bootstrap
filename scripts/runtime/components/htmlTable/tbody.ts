import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { hProps } from '../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'HtmlTableBody',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'tbody',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  return () => h(props.tag, hProps(block), context.slots);
 },
});
