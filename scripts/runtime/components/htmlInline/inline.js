import { defineComponent, h } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { InlineProps, useInline } from "../../composables/base/useInline.js";
export default defineComponent({
  name: "HtmlInline",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
