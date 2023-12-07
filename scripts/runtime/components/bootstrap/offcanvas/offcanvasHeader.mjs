import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsOffcanvasHeader",
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
        "offcanvas-header": true
      }
    };
    return () => h(props.tag, hProps(current, block), hSlots(context.slots.default));
  }
});
