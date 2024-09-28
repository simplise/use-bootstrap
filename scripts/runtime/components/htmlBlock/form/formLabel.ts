import { useInline, InlineProps } from '../../../composables/base/useInline';
import { useFormLabel } from '../../../composables/bootstrap/useFormLabel';
import { ForProps } from '../../../composables/attributes/useFor';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsFormLabel',
 props: {
  ...InlineProps,
  ...ForProps,
  tag: {
   type: String,
   default: 'label',
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const formLabel = useFormLabel(props);
  //
  const current = {
   class: {
    [`form-label`]: true,
   },
  };
  //
  return () => h(props.tag, hProps(current, inline, formLabel), context.slots);
 },
});
