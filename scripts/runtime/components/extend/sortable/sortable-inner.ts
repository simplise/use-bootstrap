import type { PropType } from 'vue';
import { useVModel } from '../../../composables/utils/helpers';
import { type UseSortableOptions, useSortable } from './useSortable';
import { defineComponent, h, reactive, ref } from '#imports';

export default defineComponent({
 model: {
  prop: 'modelValue',
  event: 'update:modelValue',
 },
 props: {
  modelValue: {
   type: Array as PropType<any[]>,
   required: true,
  },
  tag: {
   type: String,
   default: 'div',
  },
  options: {
   type: Object as PropType<UseSortableOptions>,
   default: { animation: 150 },
  },
 },
 //
 setup(props, { slots }) {
  const list = useVModel(props, 'modelValue');
  const target = ref();
  const data = reactive(useSortable(target, list, props.options));
  return () => {
   if (slots.default)
    return h(props.tag, { ref: target }, slots.default(data));
  };
 },
});
