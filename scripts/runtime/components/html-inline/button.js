import { hProps, hSlots } from "../../composables/utils/useProps.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import {
  ButtonProps,
  useButton
} from "../../composables/html/useButton.js";
import { ToggleProps, useToggle } from "../../composables/bootstrap/useToggle.js";
import {
  CloseButtonProps,
  useCloseButton
} from "../../composables/bootstrap/useCloseButton.js";
import { useID, IDProps } from "../../composables/attributes/useID.js";
import { TooltipProps, useTooltip } from "../../composables/bootstrap/useTooltip.js";
import { PopoverProps, usePopover } from "../../composables/bootstrap/usePopover.js";
import { ActiveProps, useActive } from "../../composables/bootstrap/useItemsActive.js";
import { defineComponent, h, ref } from "#imports";
import Icon from "../icon/icon.js";
export default defineComponent({
  name: "HtmlButton",
  props: {
    ...BlockProps,
    ...ButtonProps,
    ...IDProps,
    ...ToggleProps,
    ...ActiveProps,
    ...CloseButtonProps,
    ...TooltipProps,
    ...PopoverProps,
    type: {
      type: String,
      default: "button"
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
    const elementRef = ref();
    const block = useBlock(props);
    const Button = useButton(props);
    const id = useID(props, "button");
    const toggle = useToggle(props, elementRef);
    const active = useActive(props, "button", elementRef);
    const close = useCloseButton(props, elementRef);
    const tooltip = useTooltip(props, elementRef);
    const popover = usePopover(props, elementRef);
    const current = {
      attr: {
        type: props.type
      },
      ref: elementRef
    };
    return () => h(
      "button",
      hProps(
        current,
        id,
        Button,
        close,
        toggle,
        active,
        popover,
        tooltip,
        block
      ),
      [
        !props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor }) : void 0,
        ...hSlots(context.slots.default, tooltip.render, popover.render),
        props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor, class: { bi: true } }) : void 0
      ]
    );
  }
});
