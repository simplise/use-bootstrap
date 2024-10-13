import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { useFormLabel } from "../../../composables/bootstrap/useFormLabel.js";
import { ForProps } from "../../../composables/attributes/useFor.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsFormLabel",
  props: {
    ...InlineProps,
    ...ForProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const formLabel = useFormLabel(props);
    const current = {
      class: {
        [`form-label`]: true
      }
    };
    return () => h(props.tag, hProps(current, inline, formLabel), context.slots);
  }
});
