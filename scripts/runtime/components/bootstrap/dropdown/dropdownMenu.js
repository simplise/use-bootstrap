import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  DropdownMenuProps,
  useDropdownMenu
} from "../../../composables/bootstrap/useDropdownMenu.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsDropdownMenu",
  props: {
    ...BlockProps,
    ...DropdownMenuProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdownMenu = useDropdownMenu(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => {
      return h(props.tag, hProps(current, block, dropdownMenu), context.slots);
    };
  }
});
