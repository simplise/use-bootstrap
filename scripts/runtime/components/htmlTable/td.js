import { defineComponent, h, computed } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
export default defineComponent({
  name: "HtmlTableData",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "td"
    },
    active: {
      type: Boolean
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
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
