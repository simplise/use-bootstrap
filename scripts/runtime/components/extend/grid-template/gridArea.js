import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
export default defineComponent({
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    area: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      style: computed(() => {
        return {
          "grid-area": props.area
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
