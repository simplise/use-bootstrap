import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { useValidate, ValidateProps } from '../../../composables/bootstrap/useValidate';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'HtmlForm',
 props: {
  ...BlockProps,
  ...ValidateProps,
  tag: {
   type: String,
   default: 'form',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLDivElement>();
  const block = useBlock(props);
  const validate = useValidate(props, elementRef);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(current, block, validate), context.slots);
 },
});
