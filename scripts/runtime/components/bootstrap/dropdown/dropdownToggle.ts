import { hProps, hSlots } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 useButton,
 ButtonProps,
} from '../../../composables/html/useButton';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { defineComponent, h, ref, inject, type Ref } from '#imports';
import Icon from '../../icon/icon';
//
export default defineComponent({
 name: 'BsDropdownToggle',
 props: {
  ...BlockProps,
  ...ButtonProps,
  ...ToggleProps,
  tag: {
   type: String,
   default: 'a',
  },
  toggle: {
   type: String,
   default: 'dropdown',
  },
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
   }
 },
 setup(props, context) {
  //
  const elementRef = inject<Ref<HTMLElement | undefined>>('toggleRef.dropdown', ref());
  const block = useBlock(props);
  const Button = useButton(props);
  const toggle = useToggle(props, elementRef);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () =>
   h(
    'button',
    hProps(current, toggle, Button, block),
    [
      !props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor }) : undefined,
      ...hSlots(context.slots.default,),
      props.iconEnd && props.icon ? h(Icon, { icon: props.icon, color: props.iconColor, class: { bi: true } }) : undefined,
    ]
   );
 },
});
