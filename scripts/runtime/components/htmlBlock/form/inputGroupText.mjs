import { defineComponent, h } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsFormInputGroupText",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const current = {
      class: {
        [`input-group-text`]: true
      }
    };
    return () => h(props.tag, hProps(current, inline), context.slots);
  }
});
