import { hProps, exposeMethods } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useCollapse, CollapseProps } from '../../../composables/bootstrap/useCollapse';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsCollapse',
 props: {
  ...BlockProps,
  ...IDProps,
  ...CollapseProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLDivElement>();
  //
  const id = useID(props, 'collapse'); //
  const collapse = useCollapse(props, context, elementRef);
  const block = useBlock(props);
  //
  exposeMethods(context, collapse, block);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, block, collapse, id), context.slots);
 },
});
