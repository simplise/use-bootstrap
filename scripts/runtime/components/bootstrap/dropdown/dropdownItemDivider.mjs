import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsDropdownItemDivider",
  props: {
    ...BlockProps,
    divider: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "dropdown-divider": true
      }
    };
    return () => h("li", h("hr", hProps(block, current), context.slots));
  }
});
