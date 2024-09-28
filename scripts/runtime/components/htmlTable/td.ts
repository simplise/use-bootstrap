import { hProps } from '../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../composables/base/useBlock';
import { defineComponent, h, computed } from '#imports';
//
export default defineComponent({
 name: 'HtmlTableData',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'td',
  },
  active: {
   type: Boolean,
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
     [`table-active`]: props.active,
    };
   }),
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
