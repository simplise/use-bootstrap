import { hProps } from '../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { defineComponent, h, computed } from '#imports';
//
export default defineComponent({
 name: 'HtmlTableH',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'th',
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: computed(() => {
    return {
     [`table-${props.color}`]: props.color,
    };
   }),
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
