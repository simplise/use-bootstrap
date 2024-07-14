import { defineComponent, h } from "#imports";
import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "HtmlLabel",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
