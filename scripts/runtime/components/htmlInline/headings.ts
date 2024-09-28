import { hProps } from '../../composables/utils/useProps';
import { HeadingsProps, useHeadings } from '../../composables/html/useHeadings';
import { InlineProps, useInline } from '../../composables/base/useInline';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'HtmlHeadings',
 props: {
  ...InlineProps,
  ...HeadingsProps,
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const headings = useHeadings(props);
  //
  return () => h(headings.tag, hProps(headings, inline), context.slots);
 },
});
