import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
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
