import { hProps, hSlots, exposeMethods } from '../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { ToggleProps, useToggle } from '../../composables/bootstrap/useToggle';
import { TooltipProps, useTooltip } from '../../composables/bootstrap/useTooltip';
import { PopoverProps, usePopover } from '../../composables/bootstrap/usePopover';
import { IDProps, useID } from '../../composables/attributes/useID';
import {
 AnchorProps,
 useAnchor,
} from '../../composables/html/useAnchor';
import { useScrollSpyItem } from '../../composables/bootstrap/useScrollSpyItem';
import { ActiveProps, useActive } from '../../composables/bootstrap/useItemsActive';
import BsActiveLink from '../nuxt/bsActiveLink';
import { defineComponent, h, ref } from '#imports';
import Icon from '../icon/icon';
//
export default defineComponent({
 name: 'HtmlAnchor',
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
   default: undefined,
  },
  iconEnd: {
   type: Boolean,
   default: false,
  },
  iconColor: {
   type: String,
   default: undefined,
  },
  iconHover: {
   type: Boolean,
   default: undefined,
  },
  nav: {
   type: Boolean,
   default: undefined,
  },
  alert: {
   type: Boolean,
   default: undefined,
  },
  card: {
   type: Boolean,
   default: undefined,
  },
  externalIcon:{
   type: String,
   default: 'bi:box-arrow-up-right',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const Block = useBlock(props);
  const id = useID(props, 'a');
  const toggle = useToggle(props, elementRef);
  const tooltip = useTooltip(props, elementRef);
  const popover = usePopover(props, elementRef);
  const Anchor = useAnchor(props);
  const active = useActive(props, 'button', elementRef);
  const spyItem = useScrollSpyItem(props, elementRef);
  const spyActive = useActive(props, 'list', elementRef);
  //
  const current = {
   class: {
    'icon-link': props.icon,
    'icon-link-hover': props.iconHover,
    'nav-link': props.nav,
    'alert-link': props.alert,
    'card-link': props.card,
   },
   // attr: {
   //  activeClass: '',
   //  exactActiveClass: ''
   // },
   ref: elementRef,
  };
  //
  exposeMethods(context);
  //
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
    current,
   ),
   () => [
    !props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor , margin: 'e-1', class: { bi: true } }) : undefined,
    ...hSlots(context.slots.default, tooltip.render, popover.render),
    props.iconEnd && props.icon ? h(Icon, { icon: props.icon , color: props.iconColor, margin: 's-1', class: { bi: true } }) : undefined,
    props.external ? h(Icon, { icon: props.externalIcon , color: props.iconColor , margin: 's-1', class: { bi: true } }) : undefined,
   ],
  );
 },
},
);
