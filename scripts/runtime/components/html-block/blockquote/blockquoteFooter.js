import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
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
