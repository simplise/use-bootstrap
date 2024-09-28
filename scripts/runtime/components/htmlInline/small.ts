import { hProps } from '../../composables/utils/useProps';
import { InlineProps, useInline } from '../../composables/base/useInline';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'HtmlSmall',
 props: {
  ...InlineProps,
  tag: {
   type: String,
   default: 'small',
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  //
  return () => h(props.tag, hProps(inline), context.slots);
 },
});
