import { defineComponent, h, inject, computed } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
export default defineComponent({
  name: "BsValidFeedback",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    valid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const hasValidateion = inject(
      "hasValidation",
      void 0
    );
    if (hasValidateion) {
      hasValidateion.value = true;
    }
    const current = {
      class: computed(() => {
        return {
          "invalid-feedback": !props.valid,
          "valid-feedback": props.valid
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
