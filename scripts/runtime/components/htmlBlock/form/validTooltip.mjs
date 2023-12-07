import { defineComponent, h, inject, computed } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "BsValidTooltip",
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
          "invalid-tooltip": !props.valid,
          "valid-tooltip": props.valid
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
