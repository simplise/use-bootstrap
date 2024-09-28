import { get, includes, isArray, isBoolean, isObject, isString, remove, set } from '../../utils/helpers';
import type { IViewStateResult, IViewStateValidateResult } from '../useViewState';
import { ref, unref, watch, computed, type PropType } from '#imports';

export const StateInputProps = {
 stateSrc: {
  type: Object as PropType<IViewStateResult>,
 },
 statePath: {
  type: String,
 },
 modelValue: {
  type: [Object, Array, String, Boolean],
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
 type: {
  type: String,
  default: 'text',
 },
};

export interface IStateInputProps {
 stateSrc?: IViewStateResult;
 statePath?: string;
 modelValue?: object | unknown[] | string | boolean;
 validate?: boolean;
 inValid?: boolean;
 value?: string;
 type?: string;
}

export function useStateInput<P extends IStateInputProps>(props: P, emits: (event: 'update:modelValue', ...args: any[]) => void) {
 if (props.type == 'checkbox') {
  return useStateInputTypeCheckbox(props, emits);
 }
 if (props.type == 'radio') {
  return useStateInputTypeRadio(props, emits);
 }
 return useStateInputTypeText(props, emits);
}

function useStateInputTypeText<P extends IStateInputProps>(props: P, emits: (event: 'update:modelValue', ...args: any[]) => void) {
 const baseValue = ref(props.modelValue || props.value || '');// ValueとModel、StateSrcの全てに対応させるために用いる、内部用の値
 const baseChecked = ref(false);
 const valid = ref(false);// 検証結果
 // Element のinputイベントから呼び出します
 const updateValue = (event: Event) => {
  if (event && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
   const newValue = event.target.value;
   baseValue.value = newValue;
   emits('update:modelValue', newValue);
   if (props.stateSrc) {
    if (props.statePath) {
     props.stateSrc.set(props.statePath, newValue);
    }
    else {
     props.stateSrc.update(newValue);
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
 //
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
    if (unref(props.stateSrc?.data) != baseValue.value) {
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
  if (props.validate) {
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
 //
 validate();
 //
 return {
  value: baseValue,
  updateValue,
  changeValue: (_: Event) => {},
  classObject,
  checked: baseChecked,
 };
}
function useStateInputTypeCheckbox<P extends IStateInputProps>(props: P, emits: (event: 'update:modelValue', ...args: any[]) => void) {
 // ValueとModel、StateSrcの全てに対応させるために用いる、内部用の値
 const baseValue = ref(props.modelValue || props.value || false);
 const baseChecked = computed(() => {
  if (isBoolean(baseValue.value)) {
   switch (baseValue.value) {
    case true:
     return true;
   }
   return false;
  }
  else if (isArray(baseValue.value)) {
   return includes(baseValue.value, props.value);
  }
 });

 // 検証結果
 const valid = ref(false);
 // Element のinputイベントから呼び出します
 const changeValue = (event: Event) => {
  if (event && (event.target instanceof HTMLInputElement)) {
   if (isArray(baseValue.value) && props.value) {
    if (event.target.checked && !baseValue.value.includes(props.value)) {
     baseValue.value.push(props.value);
    }
    if (!event.target.checked && baseValue.value.includes(props.value)) {
     remove(baseValue.value, item => item === props.value);
    }
    const newValue = baseValue.value;
    set(newValue, props.value, event.target.checked);
    baseValue.value = newValue;
   }
   else {
    baseValue.value = event.target.checked;
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
 //
 if (props.modelValue !== undefined) {
  watch(() => props.modelValue, (newValue) => {
   if (newValue !== undefined && baseValue.value != newValue) {
    baseValue.value = newValue;
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
  if (props.statePath) {
   if (props.stateSrc?.data && isString(props.stateSrc?.data)) {
    throw new Error('Even though stateSrc data is of type string, statePath has been specified.');
   }
   watch(props.stateSrc?.data, () => {
    if (unref(props.stateSrc?.data) != baseValue.value) {
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
 //
 validate();
 //
 return {
  value: baseValue,
  updateValue: (_: Event) => {},
  changeValue,
  classObject,
  checked: baseChecked,
 };
}
function useStateInputTypeRadio<P extends IStateInputProps>(props: P, emits: (event: 'update:modelValue', ...args: any[]) => void) {
 const baseValue = ref(props.modelValue || '');// ValueとModel、StateSrcの全てに対応させるために用いる、内部用の値
 const baseChecked = computed(() => {
  if (isString(baseValue.value) && baseValue.value == props.value) {
   return true;
  }
  else {
   return false;
  }
 });
 const valid = ref(false);// 検証結果
 // Element のinputイベントから呼び出します
 const changeValue = (event: Event) => {
  if (event && (event.target instanceof HTMLInputElement)) {
   {
    baseValue.value = props.value as string;
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
    if (unref(props.stateSrc?.data) != baseValue.value) {
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
  if (props.validate) {
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
 //
 validate();
 //
 return {
  value: baseValue,
  updateValue: (_: Event) => {},
  changeValue,
  classObject,
  checked: baseChecked,
 };
}

// // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
// function getCheckboxValue(
//  el: HTMLInputElement & { _trueValue?: any; _falseValue?: any },
//  checked: boolean,
// ) {
//  const key = checked ? '_trueValue' : '_falseValue';
//  return key in el ? el[key] : checked;
// }
