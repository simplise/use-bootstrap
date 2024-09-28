import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsListItem',
 props: {
  ...BlockProps,
  ...ActiveProps,
  ...IDProps,
  ...ToggleProps,
  tag: {
   type: String,
   default: 'li',
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const id = useID(props, 'list-group-item');
  const elementRef = ref<HTMLElement>();
  const active = useActive(props, 'list', elementRef);
  const toggle = useToggle(props, elementRef);
  //
  const current = {
   class: {
    'list-group-item': true,
    [`list-group-item-${props.color}`]: props.color,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, id, block, active, toggle), context.slots);
 },
});
