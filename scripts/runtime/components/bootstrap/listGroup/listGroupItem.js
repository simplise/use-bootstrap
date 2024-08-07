import { defineComponent, h, ref } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
export default defineComponent({
  name: "BsListItem",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "li"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "list-group-item");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const toggle = useToggle(props, elementRef);
    const current = {
      class: {
        "list-group-item": true,
        [`list-group-item-${props.theme}`]: props.theme
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, id, block, active, toggle), context.slots);
  }
});
