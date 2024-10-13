import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, addProp } from "../../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
import { includesPresets } from "../../../composables/utils/usePresets.js";
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
    const textBgIncludePreset = computed(() => includesPresets("text-bg-color", props.color));
    const current = {
      class: {
        card: true,
        [`text-bg-${props.color}`]: props.color && textBgIncludePreset.value
      },
      style: computed(() => {
        return {
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-card-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-card-cap-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-card-border-color", `var(--bs-active-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-card-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-card-title-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-card-subtitle-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-card-cap-color", `var(--bs-contrast-${props.color})`)
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
