import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "HtmlDefinitionDescription",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "dd"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
