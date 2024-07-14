import { computed } from "vue";
import { addProp, hasValue } from "../../utils/useProps.js";
import { EventEmitProps } from "../../utils/useEventEmitter.js";
export const ButtonProps = {
  ...EventEmitProps,
  button: {
    type: [String, Boolean]
  },
  size: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  type: {
    type: String,
    default: "button"
  },
  to: {
    type: String
  },
  colorGenerate: {
    type: Boolean
  }
};
export function useButton(props) {
  return {
    class: computed(() => {
      return {
        disabled: props.disabled,
        btn: props.button,
        [`btn-${props.button}`]: hasValue(props.button),
        [`btn-${props.size}`]: props.size
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.colorGenerate, "--bs-btn-bg", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-hover-bg", `var(--bs-active-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-active-bg", `var(--bs-active-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-border-color", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-hover-border-color", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-active-border-color", `var(--bs-active-${props.button})`),
        ...addProp(!props.textColor && props.colorGenerate, "--bs-btn-color", `var(--bs-contrast-${props.button})`),
        ...addProp(!props.textColor && props.colorGenerate, "--bs-btn-hover-color", `var(--bs-contrast-${props.button})`),
        ...addProp(!props.textColor && props.colorGenerate, "--bs-btn-active-color", `var(--bs-contrast-${props.button})`)
      };
    }),
    attr: computed(() => {
      return {
        "type": props.type,
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.target, "data-bv-target", props.target)
      };
    })
  };
}
