import { computed } from "vue";
import { addProp, hasValue } from "../../utils/useProps.js";
import { EventEmitProps } from "../../utils/useEventEmitter.js";
export const AnchorProps = {
  ...EventEmitProps,
  button: {
    type: [Boolean, String]
  },
  size: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  stretchedLink: {
    type: Boolean
  },
  link: {
    type: String
  },
  to: {
    type: String
  },
  colorGenerate: {
    type: Boolean
  }
};
export function useAnchor(props) {
  return {
    class: computed(() => {
      return {
        "stretched-link": props.stretchedLink,
        disabled: props.disabled,
        [`link-${props.link}`]: props.link,
        btn: props.button,
        [`btn-${props.button}`]: hasValue(props.button),
        [`btn-${props.size}`]: props.size
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.colorGenerate, "--bs-btn-bg", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-color", `var(--bs-contrast-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-border-color", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-hover-color", `var(--bs-contrast-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-hover-bg", `var(--bs-active-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-hover-border-color", `var(--bs-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-active-color", `var(--bs-contrast-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-active-bg", `var(--bs-active-${props.button})`),
        ...addProp(props.colorGenerate, "--bs-btn-active-border-color", `var(--bs-active-${props.button})`)
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.button, "role", "button"),
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.href, "href", props.href),
        ...addProp(props.target, "target", props.target),
        ...addProp(props.to, "to", props.to)
      };
    })
  };
}
