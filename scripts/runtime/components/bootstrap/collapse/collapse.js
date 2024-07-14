import { defineComponent, h, ref } from "#imports";
import { hProps, exposeMethods } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { useCollapse, CollapseProps } from "../../../composables/bootstrap/useCollapse.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
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
    exposeMethods(context, collapse, block);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, collapse, id), context.slots);
  }
});
