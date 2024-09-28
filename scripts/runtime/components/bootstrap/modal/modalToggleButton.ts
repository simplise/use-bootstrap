import { hProps } from '../../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import {
 ButtonProps,
 useButton,
} from '../../../composables/html/useButton';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsModalToggleButton',
 props: {
  ...BlockProps,
  ...ButtonProps,
  ...ToggleProps,
  toggle: {
   type: String,
   default: 'modal',
  },
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
  const toggle = useToggle(props, elementRef);
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
    hProps(current, Button, block, toggle),
    context.slots,
   );
 },
});
