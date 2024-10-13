import { hProps, hSlots } from "../../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  useButton,
  ButtonProps
} from "../../../composables/html/useButton.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import { defineComponent, h, ref, inject } from "#imports";
import Icon from "../../icon/icon.js";
export default defineComponent({
  name: "BsDropdownToggle",
  props: {
    ...BlockProps,
    ...ButtonProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "a"
    },
    toggle: {
      type: String,
      default: "dropdown"
    },
    icon: {
      type: String,
      default: void 0
    },
    iconEnd: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const Button = useButton(props);
    const toggle = useToggle(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      "button",
      hProps(current, toggle, Button, block),
      [
        !props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor }) : void 0,
        ...hSlots(context.slots.default),
        props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor, class: { bi: true } }) : void 0
      ]
    );
  }
});
