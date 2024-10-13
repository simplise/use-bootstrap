import { addProp, hasValue } from "../../composables/utils/useProps.js";
import { EventEmitProps } from "../utils/useEventEmitter.js";
import { computed } from "#imports";
import { includesPresets } from "../../composables/utils/usePresets.js";
export const ButtonProps = {
  ...EventEmitProps,
  button: {
    type: [Boolean],
    default: true
  },
  color: {
    type: [String],
    default: void 0
  },
  size: {
    type: String,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "button"
  },
  to: {
    type: String
  },
  paddingX: {
    type: String,
    default: void 0
  }
};
export function useButton(props) {
  const colorIncludePreset = computed(() => includesPresets("button-color", props.color));
  return {
    class: computed(() => {
      return {
        disabled: props.disabled,
        btn: props.button,
        [`btn-${props.color}`]: hasValue(props.color) && colorIncludePreset.value,
        [`btn-${props.size}`]: props.size
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-bg", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-hover-bg", `var(--bs-active-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-active-bg", `var(--bs-active-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-border-color", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-hover-border-color", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-active-border-color", `var(--bs-active-${props.color})`),
        ...addProp(!props.textColor && props.color && !colorIncludePreset.value, "--bs-btn-color", `var(--bs-contrast-${props.color})`),
        ...addProp(!props.textColor && props.color && !colorIncludePreset.value, "--bs-btn-hover-color", `var(--bs-contrast-${props.color})`),
        ...addProp(!props.textColor && props.color && !colorIncludePreset.value, "--bs-btn-active-color", `var(--bs-contrast-${props.color})`),
        ...addProp(props.paddingX, "--bs-btn-padding-x", `${props.paddingX}`)
      };
    }),
    attr: computed(() => {
      return {
        type: props.type,
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.target, "data-bv-target", props.target)
      };
    })
  };
}
