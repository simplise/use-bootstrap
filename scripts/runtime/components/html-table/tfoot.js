import { hProps, addProp } from "../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "HtmlTableFoot",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tfoot"
    },
    theme: {
      type: String,
      default: void 0
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
