import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../composables/base/useBlock.mjs";
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
