import { h } from "vue";
import { hSlots } from "../../utils/useProps.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../html/useAnchorButton.mjs";
export const DropdownItemProps = {
  ...AnchorButtonProps,
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
  const anchorButton = useAnchorButton(props);
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
          anchorButton.tag,
          {
            class: {
              "dropdown-item": true,
              active: props.active,
              ...anchorButton.class
            },
            ...anchorButton.attr
          },
          hSlots(context.slots.default)
        );
      }
    }
  };
}
