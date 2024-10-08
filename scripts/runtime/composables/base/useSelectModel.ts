import type { Ref } from 'vue';
import { isArray } from '../utils/helpers';
import { onMounted, watch } from '#imports';

export const SelectModelProps = {
 modelValue: {
  type: [String, Number, Array],
 },
};

export interface ISelectModelProps {
 modelValue?: string | number | unknown[];
}

export const SelectModelEmits = ['update:modelValue'];

export function useSelectModel<P extends ISelectModelProps>(
 props: P,
 emit: (event: string, ...args: unknown[]) => void,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const refresh = () => {
  if (elementRef.value && props.modelValue) {
   if (elementRef.value instanceof HTMLSelectElement) {
    if (elementRef.value.multiple) {
     Array.from(elementRef.value.options).forEach((n) => {
      if (isArray(props.modelValue)) {
       if (props.modelValue.some(i => i == n.value)) {
        n.selected = true;
       }
       else {
        n.selected = false;
       }
      }
     });

     // elementRef.value.value = props.modelValue
    }
    else {
     elementRef.value.value = props.modelValue.toString();
    }
   }
  }
 };
 //
 onMounted(() => {
  refresh();
 });
 watch(
  () => props.modelValue,
  () => {
   refresh();
  },
 );
 //
 return {
  event: {
   onChange: (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLSelectElement) {
     if (target.multiple) {
      const values = Array.from(target.selectedOptions, n => n.value);
      emit('update:modelValue', values);
     }
     else if (target.selectedIndex > -1) {
      emit('update:modelValue', target.value);
     }
    }
   },
  },
 };
}
