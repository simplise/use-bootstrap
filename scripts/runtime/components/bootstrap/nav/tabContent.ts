import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { IDProps, useID } from '../../../composables/attributes/useID';
import {
 CurrentProps,
 useItemsCurrent,
} from '../../../composables/bootstrap/useItemsCurrent';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsTabContent',
 props: {
  ...BlockProps,
  ...IDProps,
  ...CurrentProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'tab-content');
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'tab');
  //
  const current = {
   class: {
    'tab-content': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, itemsCurrent, id, block), context.slots);
 },
});
