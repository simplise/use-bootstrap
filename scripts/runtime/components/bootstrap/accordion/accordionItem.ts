import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsAccordionItem',
 props: {
  ...BlockProps,
  ...ActiveProps,
  ...IDProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const id = useID(props, 'accordion-item'); // for useActive
  const elementRef = ref<HTMLElement>();
  const active = useActive(props, 'collapse', elementRef);
  //
  const current = {
   class: {
    'accordion-item': true,
   },
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(id, current, active, block), context.slots);
 },
});
