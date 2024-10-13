import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsTabContent",
  props: {
    ...BlockProps,
    ...IDProps,
    ...CurrentProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "tab-content");
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "tab");
    const current = {
      class: {
        "tab-content": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, itemsCurrent, id, block), context.slots);
  }
});
