import { defineComponent, h, computed } from "vue";
import { addClassNames, addProp, hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "BsGridCol",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    size: {
      type: [Number, String, Array],
      default: void 0
    },
    colmunStart: {
      type: Number,
      default: void 0
    },
    row: {
      type: Number,
      default: void 0
    },
    span: {
      type: Number,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          ...addClassNames(props.size, (n) => `g-col-${n}`),
          [`g-start-${props.colmunStart}`]: props.colmunStart
        };
      }),
      style: computed(() => {
        return {
          ...addProp(props.row, "grid-row", `${props.row}`),
          ...addProp(props.span, "grid-column", `span ${props.span}`)
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
