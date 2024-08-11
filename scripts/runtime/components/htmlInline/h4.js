import { hProps } from "../../utils/useProps.js";
import { HeadingsProps, useHeadings } from "../../composables/html/useHeadings.js";
import { InlineProps, useInline } from "../../composables/base/useInline.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "HtmlHeadings4",
  props: {
    ...InlineProps,
    ...HeadingsProps,
    level: {
      type: Number,
      default: 4
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const headings = useHeadings(props);
    return () => h(headings.tag, hProps(headings, inline), context.slots);
  }
});
