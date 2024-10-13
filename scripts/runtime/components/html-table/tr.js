import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { hProps } from "../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
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
    color: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.color}`]: props.color,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
