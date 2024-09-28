import { hProps, hSlots } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 useButton,
 ButtonProps,
} from '../../../composables/html/useButton';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { IDProps, useID } from '../../../composables/attributes/useID';
import {
 useVisuallyHiddenContent,
 VisuallyHiddenContentProps,
} from '../../../composables/bootstrap/useVisuallyHiddenContent';
import type { Ref } from '#imports';
import { defineComponent, h, ref, inject } from '#imports';
//
export default defineComponent({
 name: 'BsDropdownToggleSplit',
 props: {
  ...BlockProps,
  ...ButtonProps,
  ...ToggleProps,
  ...IDProps,
  ...VisuallyHiddenContentProps,
  tag: {
   type: String,
   default: 'button',
  },
  toggle: {
   type: String,
   default: 'dropdown',
  },
  split: {
   type: Boolean,
   default: true,
  },
  label: {
   type: String,
   default: 'Toggle Dropdown',
  },
 },
 setup(props) {
  //
  const elementRef = inject<Ref<HTMLElement | undefined>>('toggleRef.dropdown', ref());
  const block = useBlock(props);
  const Button = useButton(props);
  const id = useID(props, 'dropdown-toggle-split');
  const toggle = useToggle(props, elementRef);
  const visuallyHidden = useVisuallyHiddenContent(props);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () =>
   h(
    'button',
    hProps(current, id, block, toggle, Button),
    hSlots(visuallyHidden.render),
   );
 },
});
