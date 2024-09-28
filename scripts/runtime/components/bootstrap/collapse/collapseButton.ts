import { hProps } from '../../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import {
 useButton,
 ButtonProps,
} from '../../../composables/html/useButton';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsCollapseButton',
 props: {
  ...BlockProps,
  ...ButtonProps,
  ...ToggleProps,
  tag: {
   type: String,
   default: 'button',
  },
  toggle: {
   type: String,
   default: 'collapse',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const Button = useButton(props);
  const toggle = useToggle(props, elementRef);
  const current = {};
  //
  return () =>
   h(
    'button',
    hProps(current, Button, toggle, block),
    context.slots,
   );
 },
});
