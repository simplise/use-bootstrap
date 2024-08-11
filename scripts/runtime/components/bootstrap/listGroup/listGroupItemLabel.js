import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsListItemLabel",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    tag: {
      type: String,
      default: "label"
    },
    stretched: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "list-group-item-label");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const current = {
      class: {
        "list-group-item": true,
        "stretched-link": props.stretched
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, id, block, active), context.slots);
  }
});
