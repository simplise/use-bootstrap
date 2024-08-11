import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsGridCol",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: [Boolean, String, Number],
      default: true
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
