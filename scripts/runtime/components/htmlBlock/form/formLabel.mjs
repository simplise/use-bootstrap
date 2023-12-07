import { defineComponent, h } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { useFormLabel } from "../../../composables/bootstrap/useFormLabel.mjs";
import { ForProps } from "../../../composables/attributes/useFor.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
