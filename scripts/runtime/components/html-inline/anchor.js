import { hProps, hSlots, exposeMethods } from "../../composables/utils/useProps.js";
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
import BsActiveLink from "../nuxt/bsActiveLink.js";
import { defineComponent, h, ref } from "#imports";
import Icon from "../icon/icon.js";
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
      ...ActiveProps,
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
      },
      iconHover: {
        type: Boolean,
        default: void 0
      },
      nav: {
        type: Boolean,
        default: void 0
      },
      alert: {
        type: Boolean,
        default: void 0
      },
      card: {
        type: Boolean,
        default: void 0
      },
      externalIcon: {
        type: String,
        default: "bi:box-arrow-up-right"
      }
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
        class: {
          "icon-link": props.icon,
          "icon-link-hover": props.iconHover,
          "nav-link": props.nav,
          "alert-link": props.alert,
          "card-link": props.card
        },
        // attr: {
        //  activeClass: '',
        //  exactActiveClass: ''
        // },
        ref: elementRef
      };
      exposeMethods(context);
      return () => h(
        BsActiveLink,
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
        () => [
          !props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor, margin: "e-1", class: { bi: true } }) : void 0,
          ...hSlots(context.slots.default, tooltip.render, popover.render),
          props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor, margin: "s-1", class: { bi: true } }) : void 0,
          props.external ? h(Icon, { icon: props.externalIcon, color: props.iconColor, margin: "s-1", class: { bi: true } }) : void 0
        ]
      );
    }
  }
);
