import { useInline, InlineProps } from '../../../composables/base/useInline';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h, computed } from '#imports';
//
export default defineComponent({
 name: 'BsColFormLabel',
 props: {
  ...InlineProps,
  tag: {
   type: String,
   default: 'label',
  },
  size: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  //
  const current = {
   class: computed(() => {
    return {
     'col-form-label': true,
     [`col-form-label-${props.size}`]: props.size,
    };
   }),
  };
  //
  return () => h(props.tag, hProps(current, inline), context.slots);
 },
});
