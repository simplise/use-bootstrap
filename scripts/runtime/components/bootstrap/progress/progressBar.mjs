import { defineComponent, h, computed } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { addProp, hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsProgressBar",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    striped: {
      type: Boolean
    },
    animated: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          "progress-bar": true,
          "progress-bar-striped": props.striped,
          "progress-bar-animated": props.animated
        };
      }),
      style: computed(() => {
        return {
          ...addProp(
            props.value && !props.relativeWidth,
            "width",
            `${props.value * 100 / (props.max - props.min)}%`
          )
        };
      }),
      attr: computed(() => {
        return {
          role: "progressbar",
          "aria-valuenow": props.value,
          "aria-valuemin": props.min,
          "aria-valuemax": props.max
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
