import { h } from "vue";
import { hSlots } from "../../utils/useProps.js";
import { useAnchor, AnchorProps } from "../html/useAnchor.js";
import BsLink from "../../nuxt/bslink";
export const DropdownItemProps = {
  ...AnchorProps,
  divider: {
    type: Boolean
  },
  text: {
    type: Boolean
  },
  active: {
    type: Boolean
  }
};
export function useDropdownItem(props, context) {
  const Anchor = useAnchor(props);
  return {
    method: {},
    render: () => {
      if (props.divider) {
        return h("hr", {
          class: {
            "dropdown-divider": true
          }
        });
      } else if (props.text) {
        return h(
          "span",
          {
            class: {
              "dropdown-item-text": true
            }
          },
          hSlots(context.slots.default)
        );
      } else {
        return h(
          BsLink,
          {
            class: {
              "dropdown-item": true,
              "active": props.active,
              ...Anchor.class
            },
            ...Anchor.attr
          },
          hSlots(context.slots.default)
        );
      }
    }
  };
}
