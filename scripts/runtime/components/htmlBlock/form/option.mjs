import { defineComponent, h } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "HtmlOption",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "option"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
