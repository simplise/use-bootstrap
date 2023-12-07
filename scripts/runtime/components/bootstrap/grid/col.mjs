import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
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
