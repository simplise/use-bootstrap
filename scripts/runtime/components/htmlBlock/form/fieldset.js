import { defineComponent, h } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "HtmlFieldset",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "fieldset"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
