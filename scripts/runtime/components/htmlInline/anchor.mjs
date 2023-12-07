import { defineComponent, h, ref } from "vue";
import { hProps, hSlots, exposeMethods } from "../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
import { ToggleProps, useToggle } from "../../composables/bootstrap/useToggle.mjs";
import { TooltipProps, useTooltip } from "../../composables/bootstrap/useTooltip.mjs";
import { PopoverProps, usePopover } from "../../composables/bootstrap/usePopover.mjs";
import { IDProps, useID } from "../../composables/attributes/useID.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../composables/html/useAnchorButton.mjs";
import { useScrollSpyItem } from "../../composables/bootstrap/useScrollSpyItem.mjs";
import { ActiveProps, useActive } from "../../composables/bootstrap/useItemsActive.mjs";
import BsLink from "../nuxt/bslink.mjs";
export default defineComponent(
  {
    name: "HtmlAnchor",
    props: {
      ...BlockProps,
      ...AnchorButtonProps,
      ...IDProps,
      ...ToggleProps,
      ...TooltipProps,
      ...PopoverProps,
      ...ActiveProps
    },
    setup(props, context) {
      const elementRef = ref();
      const Block = useBlock(props);
      const id = useID(props, "a");
      const toggle = useToggle(props, elementRef);
      const tooltip = useTooltip(props, elementRef);
      const popover = usePopover(props, elementRef);
      const anchorButton = useAnchorButton(props);
      const active = useActive(props, "button", elementRef);
      const spyItem = useScrollSpyItem(props, elementRef);
      const spyActive = useActive(props, "list", elementRef);
      const current = {
        ref: elementRef
      };
      exposeMethods(context);
      return () => h(
        BsLink,
        hProps(
          anchorButton,
          active,
          toggle,
          tooltip,
          popover,
          Block,
          spyItem,
          spyActive,
          id,
          current
        ),
        () => hSlots(context.slots.default, tooltip.render)
      );
    }
  }
);
