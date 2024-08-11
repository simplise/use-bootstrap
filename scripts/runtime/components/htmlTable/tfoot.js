import { hProps } from "../../utils/useProps.js";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "HtmlTableFoot",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tfoot"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
