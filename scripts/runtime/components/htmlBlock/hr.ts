import { hProps } from '../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'HtmlHr',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'hr',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  return () => h(props.tag, hProps(block), context.slots);
 },
});
