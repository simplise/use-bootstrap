import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsModalDialog",
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
        "modal-header": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
