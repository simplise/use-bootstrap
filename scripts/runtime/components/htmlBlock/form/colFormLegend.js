import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsColFormLegend",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "legend"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const current = {
      class: {
        "col-form-label": true
      }
    };
    return () => h(props.tag, hProps(current, inline), context.slots);
  }
});
