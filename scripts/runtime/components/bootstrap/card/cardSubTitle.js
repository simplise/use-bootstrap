import { defineComponent, h } from "#imports";
import { HeadingsProps, useHeadings } from "../../../composables/html/useHeadings.js";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "BsCardSubTitle",
  props: {
    ...InlineProps,
    ...HeadingsProps,
    level: {
      type: Number,
      default: 6
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const headings = useHeadings(props);
    const current = {
      class: {
        "card-subtitle": true
      }
    };
    return () => h(headings.tag, hProps(current, headings, inline), context.slots);
  }
});
