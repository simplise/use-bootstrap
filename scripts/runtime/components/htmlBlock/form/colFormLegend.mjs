import { defineComponent, h } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
