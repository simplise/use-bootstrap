import {
  computed,
  defineComponent,
  h,
  ref
} from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, exposeMethods } from "../../../utils/useProps.mjs";
import { useID, IDProps } from "../../../composables/attributes/useID.mjs";
import { DropdownProps, useDropdown } from "../../../composables/bootstrap/useDropdown.mjs";
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
          dropdown: true,
          "nav-item": true,
          "list-inline-item": props.inline,
          active: active.value
        };
      })
    };
    exposeMethods(context, current);
    return () => h(props.tag, hProps(current, block, id, dropdown), context.slots);
  }
});
