import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { CollapseProps, useCollapse } from '../../../composables/bootstrap/useCollapse';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsNavbarCollapse',
 props: {
  ...BlockProps,
  ...CollapseProps,
  ...IDProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLDivElement>();
  //
  const id = useID(props, 'navbar-collapse');
  const collapse = useCollapse(props, context, elementRef);
  const block = useBlock(props);
  //
  const current = {
   class: {
    'navbar-collapse': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, id, block, collapse), context.slots);
 },
});
