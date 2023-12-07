import { defineComponent, h, computed } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
