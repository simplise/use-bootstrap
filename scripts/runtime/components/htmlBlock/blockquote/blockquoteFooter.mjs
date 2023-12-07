import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "HtmlBlockquoteFooter",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "figcaption"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "blockquote-footer": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
