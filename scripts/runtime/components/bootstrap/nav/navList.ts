import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { NavTabProps, useNavTab } from '../../../composables/bootstrap/useNavTab';
import {
 useItemsCurrent,
 CurrentProps,
} from '../../../composables/bootstrap/useItemsCurrent';
import { hProps, hSlots } from '../../../composables/utils/useProps';
import { IDProps, useID } from '../../../composables/attributes/useID';
import {
 ScrollSpyProps,
 useScrollSpy,
} from '../../../composables/bootstrap/useScrollSpy';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsNavList',
 props: {
  ...BlockProps,
  ...NavTabProps,
  ...CurrentProps,
  ...IDProps,
  ...ScrollSpyProps,
  parent: {
   type: Boolean,
   default: true,
  },
  tag: {
   type: String,
   default: 'ul', // ul , ol
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'nav-list');
  const navTab = useNavTab(props);
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'nav');
  const spy = useScrollSpy(props, context, elementRef);
  //
  const current = {
   class: {
    nav: true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(
    props.tag,
    hProps(current, navTab, itemsCurrent, block, id, spy),
    hSlots(context.slots.default),
   );
 },
});
