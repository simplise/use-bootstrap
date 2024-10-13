import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { useID, IDProps } from "../../../composables/attributes/useID.js";
import { DropdownProps, useDropdown } from "../../../composables/bootstrap/useDropdown.js";
import { defineComponent, h, computed, ref } from "#imports";
export default defineComponent({
  name: "BsButtonGroup",
  props: {
    ...BlockProps,
    ...IDProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "div"
    },
    size: {
      type: String,
      default: void 0
    },
    vertical: {
      type: Boolean
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "button-group");
    const dropdown = useDropdown(props, context, elementRef);
    const current = {
      class: computed(() => {
        return {
          "btn-group": !props.vertical,
          [`btn-group-${props.size}`]: props.size,
          "btn-group-vertical": props.vertical
        };
      }),
      attr: {
        role: "group"
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, dropdown), context.slots);
  }
});
