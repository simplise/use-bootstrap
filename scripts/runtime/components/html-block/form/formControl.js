import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { provideFormLabel } from "../../../composables/bootstrap/useFormLabel.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
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
