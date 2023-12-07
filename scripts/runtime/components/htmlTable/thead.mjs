import { defineComponent, h, computed } from "vue";
import { useBlock, BlockProps } from "../../composables/base/useBlock.mjs";
import { hProps } from "../../utils/useProps.mjs";
export default defineComponent({
  name: "HtmlTableHead",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "thead"
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
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
