import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { useCollapse, CollapseProps } from "../../../composables/bootstrap/useCollapse.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsCollapse",
  props: {
    ...BlockProps,
    ...IDProps,
    ...CollapseProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const id = useID(props, "collapse");
    const collapse = useCollapse(props, context, elementRef);
    const block = useBlock(props);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, collapse, id), context.slots);
  }
});
