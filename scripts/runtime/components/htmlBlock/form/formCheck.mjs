import { defineComponent, h, provide } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { provideFormLabel } from "../../../composables/bootstrap/useFormLabel.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsFormCheck",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    inline: {
      type: Boolean
    },
    switch: {
      type: Boolean
    },
    reverse: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "form-check": true,
        "form-check-inline": props.inline,
        "form-check-reverse": props.reverse,
        "form-switch": props.switch
      }
    };
    provide("swich", props.switch);
    provideFormLabel();
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
