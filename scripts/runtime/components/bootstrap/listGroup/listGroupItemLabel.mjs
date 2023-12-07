import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsListItemLabel",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "list-group-item-label");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const current = {
      class: {
        "list-group-item": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, id, block, active), context.slots);
  }
});
