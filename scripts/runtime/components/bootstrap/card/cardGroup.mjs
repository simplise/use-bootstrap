import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsCardGroup",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    flush: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "card-group": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
