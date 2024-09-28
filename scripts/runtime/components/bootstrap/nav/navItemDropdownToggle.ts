import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 useAnchor,
 AnchorProps,
} from '../../../composables/html/useAnchor';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { defineComponent, h, ref, inject, type Ref } from '#imports';
//
export default defineComponent({
 name: 'BsNavItemDropdownToggle',
 props: {
  ...BlockProps,
  ...AnchorProps,
  ...ToggleProps,
  toggle: {
   type: String,
   default: 'dropdown',
  },
 },
 setup(props, context) {
  //
  const elementRef = inject<Ref<HTMLElement | undefined>>('toggleRef.dropdown', ref());
  const block = useBlock(props);
  const Anchor = useAnchor(props);
  //
  const toggle = useToggle(props, elementRef);
  //
  const current = {
   class: {
    'nav-link': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(
    'a',
    hProps(current, block, toggle, Anchor),
    context.slots,
   );
 },
});
