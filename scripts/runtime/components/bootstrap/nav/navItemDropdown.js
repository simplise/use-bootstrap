import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, exposeMethods } from "../../../composables/utils/useProps.js";
import { useID, IDProps } from "../../../composables/attributes/useID.js";
import { DropdownProps, useDropdown } from "../../../composables/bootstrap/useDropdown.js";
import { computed, defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsNavItemDropdown",
  props: {
    ...BlockProps,
    ...IDProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "li"
    },
    inline: {
      type: Boolean
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const active = ref(false);
    const block = useBlock(props);
    const id = useID(props, "nav-item-dropdown");
    const dropdown = useDropdown(props, context, elementRef);
    const current = {
      class: computed(() => {
        return {
          "dropdown": true,
          "nav-item": true,
          "list-inline-item": props.inline,
          "active": active.value
        };
      })
    };
    exposeMethods(context, current);
    return () => h(props.tag, hProps(current, block, id, dropdown), context.slots);
  }
});
