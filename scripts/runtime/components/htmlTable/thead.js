import { defineComponent, h, computed } from "#imports";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { hProps } from "../../utils/useProps.js";
export default defineComponent({
  name: "HtmlTableHead",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "thead"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
