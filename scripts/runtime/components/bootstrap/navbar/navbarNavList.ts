import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { NavTabProps, useNavTab } from '../../../composables/bootstrap/useNavTab';
import {
 CurrentProps,
 useItemsCurrent,
} from '../../../composables/bootstrap/useItemsCurrent';
import { hProps, addProp } from '../../../composables/utils/useProps';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref, computed } from '#imports';
//
export default defineComponent({
 name: 'BsNavbarNav',
 props: {
  ...BlockProps,
  ...NavTabProps,
  ...CurrentProps,
  ...IDProps,
  scroll: {
   type: Boolean,
   default: false,
  },
  scrollHeight: {
   type: String,
   default: undefined,
  },
  tag: {
   type: String,
   default: 'ul',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'navbar-nav-list');
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'nav');
  const navTab = useNavTab(props);
  //
  const current = {
   class: computed(() => {
    return {
     'navbar-nav': true,
     'navbar-nav-scroll': props.scroll,
    };
   }),
   style: computed(() => {
    return {
     ...addProp(props.scrollHeight, '--bs-scroll-height', `${props.scrollHeight}`),
    };
   }),
   ref: elementRef,
  };
  //
  return () =>
   h(
    props.tag,
    hProps(current, itemsCurrent, navTab, block, id),
    context.slots,
   );
 },
});
