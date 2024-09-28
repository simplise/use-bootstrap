import { get, isObject, isString } from '../../utils/helpers';
import type { IViewStateResult, IViewStateValidateResult } from '../useViewState';
import { ref, unref, watch, computed, type PropType, type Ref, onMounted } from '#imports';

export const StateSelectProps = {
 stateSrc: {
  type: Object as PropType<IViewStateResult>,
 },
 statePath: {
  type: String,
 },
 modelValue: {
  type: [String],
 },
 validate: {
  type: Boolean,
 },
 inValid: {
  type: Boolean,
 },
 value: {
  type: String,
 },
 multiple: {
  type: Boolean,
 },
};

export interface IStateSelectProps {
 stateSrc?: IViewStateResult;
 statePath?: string;
 modelValue?: string ;
 validate?: boolean;
 inValid?: boolean;
 value?: string;
 multiple?: boolean;
}

export function useStateSelect<P extends IStateSelectProps>(props: P, elementRef: Ref<HTMLSelectElement | undefined>, emits: (event: 'update:modelValue', ...args: any[]) => void) {
 const baseValue = ref<string | string[]>(props.modelValue ? props.modelValue : (props.multiple ? [] : ''));// ValueとModel、StateSrcの全てに対応させるために用いる、内部用の値
 const valid = ref(false);// 検証結果
 // Element のinputイベントから呼び出します
 const changeValue = (event: Event) => {
  if (event && (event.target instanceof HTMLSelectElement)) {
   {
    if (props.multiple) {
     baseValue.value = Array.from(event.target.options).filter(item => item.selected).map(item => item.value);
    }
    else {
     baseValue.value = event.target.value;
    }
   }
   emits('update:modelValue', baseValue.value);
   if (props.stateSrc) {
    if (props.statePath) {
     props.stateSrc.set(props.statePath, baseValue.value);
    }
    else {
     props.stateSrc.update(baseValue.value);
    }
   }
  }
 };
  //
 const reloadState = () => {
  if (props.stateSrc) {
   const data = unref(props.stateSrc.data);
   if (props.statePath) {
    baseValue.value = get(data, props.statePath) as string;
   }
   else {
    baseValue.value = data as string;
   }
  }
 };
 reloadState();
 const validate = () => {
  if (props.validate && props.stateSrc) {
   const validationResult = unref<IViewStateValidateResult>(props.stateSrc?.validationResult);
   if (props.statePath) {
    const pathResult = get(validationResult.location, props.statePath);
    valid.value = !pathResult;
   }
   else {
    valid.value = validationResult.valid;
   }
  }
 };

 // Watach Model
 if (props.modelValue !== undefined) {
  watch(() => props.modelValue, (newValue) => {
   if (newValue !== undefined && baseValue.value != newValue) {
    baseValue.value = newValue as string;
   }
  });
 }
 if (props.value !== undefined) {
  watch(() => props.value, (newValue) => {
   if (newValue !== undefined && baseValue.value != newValue) {
    baseValue.value = newValue;
   }
  });
 }
 if (props.stateSrc !== undefined) {
  if (props.statePath !== undefined) {
   if (props.stateSrc?.data && isString(props.stateSrc?.data)) {
    throw new Error('Even though stateSrc data is of type string, statePath has been specified.');
   }
   watch(props.stateSrc?.data, () => {
    if (props.statePath && get(unref(props.stateSrc?.data), props.statePath) != baseValue.value) {
     reloadState();
    }
   });
  }
  else {
   if (props.stateSrc?.data && isObject(props.stateSrc?.data)) {
    throw new Error('Even though stateSrc data is of type object, statePath has not been specified.');
   }
   watch(() => props.stateSrc?.data, () => {
    if (unref(props.stateSrc?.data) != baseValue.value) {
     reloadState();
    }
   });
  }
  watch(() => props.stateSrc?.validationResult, () => {
   validate();
  });
 }
 const classObject = computed(() => {
  if (props.validate !== undefined) {
   if (props.stateSrc !== undefined) {
    return {
     [`is-${valid.value ? 'valid' : 'invalid'}`]: true,
    };
   }
   else {
    return {
     [`is-${!props.inValid ? 'valid' : 'invalid'}`]: true,
    };
   }
  }
  else {
   return {};
  }
 });
 onMounted(() => {
  if (elementRef.value) {
   if (props.multiple) {
    Array.from(elementRef.value.options).forEach((option) => {
     if (baseValue.value.includes(option.value)) {
      option.selected = true;
     }
    });
   }
   else {
    Array.from(elementRef.value.options).forEach((option) => {
     if (elementRef.value && option.value == baseValue.value) {
      option.selected = true;
     }
    });
   }
  }
 });
 //
 validate();
 //
 return {
  value: baseValue,
  changeValue,
  classObject,
 };
}
