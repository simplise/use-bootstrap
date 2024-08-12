import { computed } from "#imports";
import { addProp, hasValue } from "../../utils/useProps.js";
import { EventEmitProps } from "../../utils/useEventEmitter.js";
export const AnchorButtonProps = {
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
  stretchedLink: {
    type: Boolean
  },
  link: {
    type: String
  },
  type: {
    type: String,
    default: "button"
  },
  to: {
    type: String
  }
};
export function useAnchorButton(props) {
  const tag = props.target ? "button" : props.href ? "a" : props.tag || "span";
  return {
    class: computed(() => {
      return {
        "stretched-link": props.stretchedLink,
        "disabled": props.disabled,
        [`link-${props.link}`]: props.link,
        "btn": props.button,
        [`btn-${props.button}`]: hasValue(props.button),
        [`btn-${props.size}`]: props.size
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(tag == "a" && props.button, "role", "button"),
        ...addProp(tag == "button", "type", props.type),
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.href, "href", props.href),
        ...addProp(tag == "button" && props.target, "data-bv-target", props.target),
        ...addProp(tag == "a" && props.target, "target", props.target),
        ...addProp(props.to, "to", props.to)
      };
    }),
    tag
  };
}
