import { defineComponent, h, computed } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { addProp } from "../../../utils/useProps.js";
export default defineComponent({
  name: "BsCard",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        card: true
      },
      style: computed(() => {
        return {
          ...addProp(props.color, "--bs-card-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-card-cap-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-card-border-color", `var(--bs-active-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-card-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-card-title-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-card-subtitle-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-card-cap-color", `var(--bs-contrast-${props.color})`)
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
