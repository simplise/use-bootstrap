import { defineComponent, h } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { InlineProps, useInline } from "../../composables/base/useInline.js";
export default defineComponent({
  name: "HtmlSmall",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "small"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
