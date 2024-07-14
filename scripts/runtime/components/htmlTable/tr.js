import { defineComponent, h, computed } from "#imports";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { hProps } from "../../utils/useProps.js";
export default defineComponent({
  name: "HtmlTableRow",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tr"
    },
    active: {
      type: Boolean
    },
    theme: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
