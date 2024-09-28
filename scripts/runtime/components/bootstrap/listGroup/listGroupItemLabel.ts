import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsListItemLabel',
 props: {
  ...BlockProps,
  ...ActiveProps,
  ...IDProps,
  tag: {
   type: String,
   default: 'label',
  },
  stretched: {
   type: Boolean,
   default: false,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const id = useID(props, 'list-group-item-label'); // for useActive
  const elementRef = ref<HTMLElement>();
  const active = useActive(props, 'list', elementRef);
  //
  const current = {
   class: {
    'list-group-item': true,
    'stretched-link': props.stretched,
   },
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(current, id, block, active), context.slots);
 },
});
