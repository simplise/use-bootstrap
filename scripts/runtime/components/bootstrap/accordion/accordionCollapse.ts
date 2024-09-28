import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { CollapseProps, useCollapse } from '../../../composables/bootstrap/useCollapse';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsAccordionCollapse',
 props: {
  ...BlockProps,
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
  const block = useBlock(props);
  const collapse = useCollapse(props, context, elementRef);
  //
  const current = {
   class: {
    'accordion-collapse': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, block, collapse), context.slots);
 },
});
