import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { provideFormLabel } from "../../../composables/bootstrap/useFormLabel.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsFormControl",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    provideFormLabel();
    return () => h(props.tag, hProps(block), context.slots);
  }
});
