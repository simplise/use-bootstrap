import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { InlineProps, useInline } from "../../composables/base/useInline.mjs";
export default defineComponent({
  name: "HtmlStrong",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "strong"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
