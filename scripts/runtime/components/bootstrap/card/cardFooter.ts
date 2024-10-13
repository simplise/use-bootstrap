import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCardFooter',
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
    'card-footer': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
