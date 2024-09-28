import { hProps, hSlots } from '../../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import {
 TabActiveProps,
 useTabActive,
} from '../../../composables/bootstrap/useTabActive';
import { useScrollSpyItem } from '../../../composables/bootstrap/useScrollSpyItem';
import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import { IDProps, useID } from '../../../composables/attributes/useID';
import BsLink from '../../nuxt/bslink';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsNavLink',
 props: {
  ...AnchorProps,
  ...BlockProps,
  ...IDProps,
  ...ActiveProps,
  ...TabActiveProps,
  tag: {
   type: String,
   default: 'a',
  },
  toggle: {
   type: String,
   default: 'nav',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const Anchor = useAnchor(props);
  const block = useBlock(props);
  const id = useID(props, 'nav-link');
  const active = useActive(props, 'nav', elementRef);
  const spyItem = useScrollSpyItem(props, elementRef);
  const tab = useTabActive(props, elementRef);
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
    BsLink,
    hProps(
     id,
     active,
     Anchor,
     block,
     spyItem,
     tab,
     current,
    ),
    () => hSlots(context.slots.default),
   );
 },
});
