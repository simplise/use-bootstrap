import { hProps, hSlots, exposeMethods } from "../../utils/useProps.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { ToggleProps, useToggle } from "../../composables/bootstrap/useToggle.js";
import { TooltipProps, useTooltip } from "../../composables/bootstrap/useTooltip.js";
import { PopoverProps, usePopover } from "../../composables/bootstrap/usePopover.js";
import { IDProps, useID } from "../../composables/attributes/useID.js";
import {
  AnchorProps,
  useAnchor
} from "../../composables/html/useAnchor.js";
import { useScrollSpyItem } from "../../composables/bootstrap/useScrollSpyItem.js";
import { ActiveProps, useActive } from "../../composables/bootstrap/useItemsActive.js";
import BsLink from "../nuxt/bslink.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent(
  {
    name: "HtmlAnchor",
    props: {
      ...BlockProps,
      ...AnchorProps,
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
      const Anchor = useAnchor(props);
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
          Anchor,
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
