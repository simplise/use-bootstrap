import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { hProps, addProp } from "../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
export default defineComponent({
  name: "HtmlTableHead",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "thead"
    },
    theme: {
      type: String
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      }),
      style: computed(() => {
        return {
          ...addProp(props.backgroundColor, "--bs-table-bg", `var(--bs-${props.backgroundColor})`),
          ...addProp(props.backgroundColor, "--bs-table-color", `var(--bs-contrast-${props.backgroundColor})`)
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
