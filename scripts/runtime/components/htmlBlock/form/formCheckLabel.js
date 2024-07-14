import { defineComponent, h } from "#imports";
import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { useFormLabel } from "../../../composables/bootstrap/useFormLabel.js";
import { ForProps } from "../../../composables/attributes/useFor.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "BsFormCheckLabel",
  props: {
    ...InlineProps,
    ...ForProps,
    tag: {
      type: String,
      default: "label"
    },
    stretched: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const formLabel = useFormLabel(props);
    const current = {
      class: {
        "form-check-label": true,
        "stretched-link": props.stretched
      }
    };
    return () => h(props.tag, hProps(current, inline, formLabel), context.slots);
  }
});
