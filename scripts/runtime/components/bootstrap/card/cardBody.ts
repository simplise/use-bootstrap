import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCardBody',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  }
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'card-body': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
