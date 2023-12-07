import { defineComponent, h, computed } from "vue";
import { addProp, hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "BsCssGrid",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    columns: {
      type: Number,
      default: 12
    },
    gap: {
      type: String,
      default: void 0
    },
    rows: {
      type: Number,
      default: void 0
    },
    rowGap: {
      type: Number,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        grid: true
      },
      style: computed(() => {
        return {
          ...addProp(props.rows, "--bs-rows", `${props.rows}`),
          ...addProp(props.columns != 12, "--bs-columns", `${props.columns}`),
          ...addProp(props.gap, "--bs-gap", `${props.gap}`),
          ...addProp(props.rowGap, "row-gap", `${props.rowGap}`)
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
