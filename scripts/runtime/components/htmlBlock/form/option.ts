import { useInline, InlineProps } from '../../../composables/base/useInline';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'HtmlOption',
 props: {
  ...InlineProps,
  tag: {
   type: String,
   default: 'option',
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  //
  return () => h(props.tag, hProps(inline), context.slots);
 },
});
