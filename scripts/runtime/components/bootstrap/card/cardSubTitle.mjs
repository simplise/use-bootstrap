import { defineComponent, h } from "vue";
import { HeadingsProps, useHeadings } from "../../../composables/html/useHeadings.mjs";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
