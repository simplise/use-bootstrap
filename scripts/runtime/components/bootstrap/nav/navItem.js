import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
export default defineComponent({
  name: "BsNavItem",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "li"
    },
    inline: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          "nav-item": true,
          "list-inline-item": props.inline
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
