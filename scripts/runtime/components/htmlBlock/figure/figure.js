import { defineComponent, h } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
export default defineComponent({
  name: "BsFigure",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "figure"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        figure: true
      }
    };
    return () => h("figure", hProps(current, block), context.slots);
  }
});
