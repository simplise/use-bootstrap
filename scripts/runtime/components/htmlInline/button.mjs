import { defineComponent, h, ref } from "vue";
import { hProps, hSlots } from "../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../composables/bootstrap/useToggle.mjs";
import {
  CloseButtonProps,
  useCloseButton
} from "../../composables/bootstrap/useCloseButton.mjs";
import { useID, IDProps } from "../../composables/attributes/useID.mjs";
import { TooltipProps, useTooltip } from "../../composables/bootstrap/useTooltip.mjs";
import { PopoverProps, usePopover } from "../../composables/bootstrap/usePopover.mjs";
import { ActiveProps, useActive } from "../../composables/bootstrap/useItemsActive.mjs";
export default defineComponent({
  name: "HtmlButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...IDProps,
    ...ToggleProps,
    ...ActiveProps,
    ...CloseButtonProps,
    ...TooltipProps,
    ...PopoverProps,
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
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
        anchorButton,
        close,
        toggle,
        active,
        popover,
        tooltip,
        block
      ),
      hSlots(context.slots.default, tooltip.render, popover.render)
    );
  }
});
