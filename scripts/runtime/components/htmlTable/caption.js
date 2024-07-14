import { defineComponent, h } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
export default defineComponent({
  name: "HtmlTableCaption",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "caption"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
