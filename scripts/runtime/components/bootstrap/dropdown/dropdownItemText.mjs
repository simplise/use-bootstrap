import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsDropdownItemText",
  props: {
    ...BlockProps
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "dropdown-item-text": true
      }
    };
    return () => h("li", h("span", hProps(block, current), context.slots));
  }
});
