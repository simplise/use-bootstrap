import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { useScrollSpyItem } from '../../../composables/bootstrap/useScrollSpyItem';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import {
 useAnchor,
 AnchorProps,
} from '../../../composables/html/useAnchor';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import BsLink from '../../nuxt/bsActiveLink';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsDropdownItem',
 props: {
  ...BlockProps,
  ...IDProps,
  ...ActiveProps,
  ...AnchorProps,
  ...ToggleProps,
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'dropdown-item'); // for useScrollSpyItem
  const spyItem = useScrollSpyItem(props, elementRef);
  const active = useActive(props, 'nav', elementRef);
  const Anchor = useAnchor(props);
  const toggle = useToggle(props, elementRef);
  //
  return () => h(
   'li',
   hProps(block),
   h(
    BsLink,
    hProps(
     {
      class: {
       'dropdown-item': true,
      },
      ref: elementRef,
     },
     Anchor,
     active,
     spyItem,
     toggle,
     id,
    ),
    context.slots.default,
   ));
 },
});
