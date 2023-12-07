import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { HeadingsProps, useHeadings } from "../../composables/html/useHeadings.mjs";
import { InlineProps, useInline } from "../../composables/base/useInline.mjs";
export default defineComponent({
  name: "HtmlHeadings5",
  props: {
    ...InlineProps,
    ...HeadingsProps,
    level: {
      type: Number,
      default: 5
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const headings = useHeadings(props);
    return () => h(headings.tag, hProps(headings, inline), context.slots);
  }
});
