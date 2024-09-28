import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import { useScrollSpyItem } from '../../../composables/bootstrap/useScrollSpyItem';
import BsLink from '../../nuxt/bslink';
import { defineComponent, h, ref, computed } from '#imports';
//
export default defineComponent({
 name: 'BsListItem',
 props: {
  ...AnchorProps,
  ...BlockProps,
  ...ActiveProps,
  ...ToggleProps,
  ...IDProps,
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const Anchor = useAnchor(props);
  const block = useBlock(props);
  const id = useID(props, 'list-item'); // for useActive
  const toggle = useToggle(props, elementRef);
  const active = useActive(props, 'list', elementRef);
  const spyItem = useScrollSpyItem(props, elementRef);
  //
  const current = {
   class: computed(() => {
    return {
     'list-group-item': true,
     [`list-group-item-${props.color}`]: props.color,
    };
   }),
   ref: elementRef,
  };
  //
  return () =>
   h(
    BsLink,
    hProps(current, id, Anchor, block, active, toggle, spyItem),
    context.slots,
   );
 },
});
