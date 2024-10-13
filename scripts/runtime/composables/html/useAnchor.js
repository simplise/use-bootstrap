import { addProp } from "../../composables/utils/useProps.js";
import { EventEmitProps } from "../utils/useEventEmitter.js";
import { useDynamicRoute } from "../../composables/extend/dynamicRoute/useDynamicRoute.js";
import { includesPresets } from "../../composables/utils/usePresets.js";
import { computed } from "#imports";
export const AnchorProps = {
  ...EventEmitProps,
  button: {
    type: Boolean,
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
  stretched: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String,
    default: void 0
  },
  to: {
    type: String,
    default: void 0
  },
  activeBackgroundColor: {
    type: String,
    default: void 0
  },
  activeBorderColor: {
    type: String,
    default: void 0
  },
  activeColor: {
    type: String,
    default: void 0
  },
  dynamicRoute: {
    type: Boolean,
    default: void 0
  },
  external: {
    type: Boolean,
    default: void 0
  }
};
export function useAnchor(props) {
  const colorIncludePreset = computed(() => includesPresets(props.button ? "button-color" : "link-color", props.color));
  return {
    class: computed(() => {
      return {
        "stretched-link": props.stretched,
        "disabled": props.disabled,
        [`link-${props.color}`]: props.color && !props.button && colorIncludePreset.value,
        "btn": props.button,
        [`btn-${props.color}`]: props.color && props.button && colorIncludePreset.value,
        [`btn-${props.size}`]: props.size && props.button
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-bg", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-color", `var(--bs-contrast-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-border-color", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-hover-color", `var(--bs-contrast-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-hover-bg", `var(--bs-active-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-hover-border-color", `var(--bs-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-active-color", `var(--bs-contrast-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-active-bg", `var(--bs-active-${props.color})`),
        ...addProp(props.color && !colorIncludePreset.value, "--bs-btn-active-border-color", `var(--bs-active-${props.color})`),
        ...addProp(props.activeBackgroundColor, "--bs-btn-active-bg", `var(--bs-${props.activeBackgroundColor})`),
        ...addProp(props.activeBackgroundColor, "--bs-btn-active-color", `var(--bs-contrast-${props.activeBackgroundColor})`),
        ...addProp(props.activeBorderColor, "--bs-btn-active-border-color", `var(--bs-${props.activeBorderColor})`)
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.button, "role", "button"),
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.href, "href", props.href),
        ...addProp(props.target, "target", props.target),
        ...addProp(!props.target && props.external, "target", "_blank"),
        ...addProp(props.external, "rel", "noopener"),
        ...addProp(props.to, "to", props.dynamicRoute ? useDynamicRoute(props.to || "").value : props.to)
      };
    })
  };
}
