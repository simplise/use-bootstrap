import { defineComponent, h } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "BsVirticalRule",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        vr: true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
