import { hProps, hSlots } from '../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import {
 ButtonProps,
 useButton,
} from '../../composables/html/useButton';
import { ToggleProps, useToggle } from '../../composables/bootstrap/useToggle';
import {
 CloseButtonProps,
 useCloseButton,
} from '../../composables/bootstrap/useCloseButton';
import { useID, IDProps } from '../../composables/attributes/useID';
import { TooltipProps, useTooltip } from '../../composables/bootstrap/useTooltip';
import { PopoverProps, usePopover } from '../../composables/bootstrap/usePopover';
import { ActiveProps, useActive } from '../../composables/bootstrap/useItemsActive';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'HtmlButton',
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
   default: 'button',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const Button = useButton(props);
  const id = useID(props, 'button');
  const toggle = useToggle(props, elementRef);
  const active = useActive(props, 'button', elementRef);
  const close = useCloseButton(props, elementRef);
  const tooltip = useTooltip(props, elementRef);
  const popover = usePopover(props, elementRef);
  //
  const current = {
   attr: {
    type: props.type,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(
    'button',
    hProps(
     current,
     id,
     Button,
     close,
     toggle,
     active,
     popover,
     tooltip,
     block,
    ),
    hSlots(context.slots.default, tooltip.render, popover.render),
   );
 },
});
