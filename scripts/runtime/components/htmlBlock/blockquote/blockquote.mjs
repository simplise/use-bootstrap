import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "HtmlBlockquotes",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "blockquote"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        blockquote: true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
