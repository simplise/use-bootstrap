import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { useValidate, ValidateProps } from "../../../composables/bootstrap/useValidate.mjs";
export default defineComponent({
  name: "HtmlForm",
  props: {
    ...BlockProps,
    ...ValidateProps,
    tag: {
      type: String,
      default: "form"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const validate = useValidate(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, validate), context.slots);
  }
});
