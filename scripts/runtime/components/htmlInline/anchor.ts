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
import BsLink from '../nuxt/bslink';
import { defineComponent, h, ref } from '#imports';
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
   ref: elementRef,
  };
  //
  exposeMethods(context);
  //
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
    current,
   ),
   () => hSlots(context.slots.default, tooltip.render),
  );
 },
},
);
