import { defineComponent, h } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { HeadingsProps, useHeadings } from "../../composables/html/useHeadings.js";
import { InlineProps, useInline } from "../../composables/base/useInline.js";
export default defineComponent({
  name: "HtmlHeadings2",
  props: {
    ...InlineProps,
    ...HeadingsProps,
    level: {
      type: Number,
      default: 2
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const headings = useHeadings(props);
    return () => h(headings.tag, hProps(headings, inline), context.slots);
  }
});
