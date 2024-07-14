import { defineComponent, h, ref } from "#imports";
import { hProps, exposeMethods } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { DropdownProps, useDropdown } from "../../../composables/bootstrap/useDropdown.js";
export default defineComponent({
  name: "BsDropdown",
  props: {
    ...BlockProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdown = useDropdown(props, context, elementRef);
    exposeMethods(context, dropdown, block);
    const current = {
      class: {
        dropdown: true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(block, dropdown, current),
      // current は最後に
      context.slots
    );
  }
});
