import type { Ref } from 'vue';
import { get, isString } from '../../utils/helpers';
import type { IViewStateResult, IViewStateValidateResult } from '../useViewState';
import { ref, unref, watch, computed, type PropType } from '#imports';

export const StateComponentProps = {
 stateSrc: {
  type: Object as PropType<IViewStateResult>,
 },
 statePath: {
  type: String,
 },
 validate: {
  type: Boolean,
 },
};

export interface IStateComponentProps {
 stateSrc?: IViewStateResult;
 statePath?: string;
 validate?: boolean;
}

export function useStateComponent<P extends IStateComponentProps>(props: P, model: Ref<unknown>) {
 const baseValue = ref(model.value);// ValueとModel、StateSrcの全てに対応させるために用いる、内部用の値
 const valid = ref(false);// 検証結果
 // Element のinputイベントから呼び出します
 const updateValue = (newValue: unknown) => {
  baseValue.value = newValue;
  if (props.stateSrc) {
   if (props.statePath) {
    props.stateSrc.set(props.statePath, newValue);
   }
   else {
    props.stateSrc.update(newValue);
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
   model.value = baseValue.value;
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
  }
  else {
   return {};
  }
 });
 watch(model, () => {
  updateValue(model.value);
 });
 //
 validate();
 //
 return {
  value: baseValue,
  updateValue,
  classObject,
 };
}
