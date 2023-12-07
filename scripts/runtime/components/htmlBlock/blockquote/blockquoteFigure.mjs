import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
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
