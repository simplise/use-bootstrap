import type { Ref } from 'vue';
import { onMounted, watch } from '#imports';

export const InputModelProps = {
 modelValue: {
  type: [String, Boolean, Number, Object],
  default: undefined,
 },
 trueValue: {
  type: [String, Boolean, Number, Object],
  default: true,
 },
 falseValue: {
  type: [String, Boolean, Number, Object],
  default: false,
 },
 value: {
  type: [String, Boolean, Number, Object],
 },
};

export interface IInputModelProps {
 modelValue?: string | boolean | number | object;
 trueValue?: string | boolean | number | object;
 falseValue?: string | boolean | number | object;
 value?: string | boolean | number | object;
}

export const InputModelEmits = ['update:modelValue'];

export function useInputModel<P extends IInputModelProps>(
 props: P,
 emit: (event: string, ...args: unknown[]) => void,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const refresh = () => {
  if (
   elementRef.value
   && props.modelValue !== undefined
   && props.modelValue !== false
  ) {
   if (elementRef.value instanceof HTMLInputElement) {
    if (elementRef.value.type == 'checkbox') {
     if (props.modelValue == props.trueValue) {
      elementRef.value.checked = true;
     }
     else {
      elementRef.value.checked = false;
     }
    }
    else if (elementRef.value.type == 'radio') {
     if (props.modelValue == props.value) {
      elementRef.value.checked = true;
     }
     else {
      elementRef.value.checked = false;
     }
    }
    else {
     elementRef.value.value = props.modelValue.toString();
    }
   }
   if (elementRef.value instanceof HTMLTextAreaElement) {
    elementRef.value.value = props.modelValue.toString();
   }
  }
  if (elementRef.value && props.modelValue == undefined && props.value) {
   if (elementRef.value instanceof HTMLInputElement) {
    elementRef.value.value = props.value.toString();
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
   onInput: (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
     if (target.type == 'checkbox') {
      if (target.checked) {
       emit('update:modelValue', props.trueValue);
      }
      else {
       emit('update:modelValue', props.falseValue);
      }
     }
     else if (target.type == 'radio') {
      if (target.checked) {
       emit('update:modelValue', props.value);
      }
     }
     else {
      emit('update:modelValue', target.value);
     }
    }
    if (target instanceof HTMLTextAreaElement) {
     emit('update:modelValue', target.value);
    }
   },
  },
 };
}
