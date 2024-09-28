import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { provideFormLabel } from '../../../composables/bootstrap/useFormLabel';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h, provide } from '#imports';
//
export default defineComponent({
 name: 'BsFormCheck',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  inline: {
   type: Boolean,
  },
  switch: {
   type: Boolean,
  },
  reverse: {
   type: Boolean,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'form-check': true,
    'form-check-inline': props.inline,
    'form-check-reverse': props.reverse,
    'form-switch': props.switch,
   },
  };
  //
  provide('swich', props.switch);
  provideFormLabel();
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});
