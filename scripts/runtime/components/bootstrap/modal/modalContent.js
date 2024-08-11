import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsModalContent",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "modal-content": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
