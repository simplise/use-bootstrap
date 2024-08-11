import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsBlockquoteFigure",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "figure"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h("figure", hProps(block), context.slots);
  }
});
