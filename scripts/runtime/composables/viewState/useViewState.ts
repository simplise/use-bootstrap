import type { Schema } from '@cfworker/json-schema';
import { get, isNumber, set, defu, useDebounceFn, useIntervalFn, cloneDeep } from '../utils/helpers';
import type {
 IIntegraionValidationOption,
 IIntegrationProtocolOption,
} from '../../../module';
import { useViewStateValidate } from '../viewState/useViewStateValidate';
import { useViewStateSource } from '../viewState/useViewStateSource';
import { useViewStateSourceProp } from '../viewState/useViewStateSourceProp';
import { computed, onNuxtReady, ref, toValue, type Ref } from '#imports';
// public にして一般のスクリプトから利用できるようにしたかったが
// setup関数内でしか動作しないことを考慮すると、public にするメリットはないと判断 2024/8/5
// Component Props
export const ViewStateProps = {
 src: { // Source URI
  type: String,
  requird: false,
 },
 path: { // Result Path
  type: [String, Number],
 },
 schemaSrc: { // JsonSchema Validator
  type: String,
 },
 data: { // Default Data, Data Passthrough
  type: [Object, Array, String, Number],
  requird: false,
 },
};
//
export interface IViewStateProps {
 src?: string;
 path?: string | number;
 schemaSrc?: string;
 data?: object | any[] | string | number;
}

// 戻り値
export interface IViewStateResult {
 data: Ref<unknown>; //
 update: (value: unknown) => void; // テンプレート内ではdata.value が動作しないので代わりに利用する更新メソッド PrimitiveValue
 set: (key: string, value: unknown) => void; // オブジェクト
 status: Ref<number>; //
 reload?: (force?: boolean) => Promise<void>; // 再読込
 syncResult?: Ref<unknown>;
 syncStatus?: Ref<number>;
 validate: () => void;
 validationResult: Ref<IViewStateValidateResult>;
 pause: () => void;
}
// StateSourceプロパティ
export interface IViewStateSourceProps {
 src: string;
 key: string;
 option: IIntegrationProtocolOption;
 type: string;
 path?: string | number;
 default?: unknown;
 // transform?: string;
 validationOptions?: IIntegraionValidationOption;
 url: string;
 stateKey: string;
 updateStateKey: string;
 fetchedStateKey: string;
 statusStateKey: string;
 srcPath: string[];
 lazy: boolean;
 server: boolean;
 immediate: boolean;
 interval: number;
}

export interface IViewStateSourceResult {
 model: Ref<unknown>; // データ本体
 updated: Ref<boolean>; // 編集済かどうかを示すフラグ
 reload?: (force?: boolean) => Promise<void>; // 再読込
 status: Ref<number>; // Httpステータス 100:実行中 200:OK  404 Not Found 401 Unauthrized 406 Not acceptable
 sync?: () => Promise<void>; //
 syncResult?: Ref<unknown>;
 syncStatus?: Ref<number>;
}

export type ViewStateNuxtHelper = () => IViewStateHelperResult;

export interface IViewStateHelperResult {
 data: Ref<unknown>;
 status: Ref<number>;
}

export interface IViewStateValidateResult {
 valid: boolean;
 location: Record<string, string[]>;
 summury: IViewStateValidateResultSummury;
 schema: Schema;
}
export interface IViewStateValidateResultSummury {
 errors: string[];
 keywords: string[];
}

export async function useViewState<P extends IViewStateProps>(
 props: P,
 schema?: unknown,
): Promise<IViewStateResult> {
 //
 const prop = useViewStateSourceProp(props);
 // Validate
 const validOptions = defu(prop.validationOptions, {
  shortCircuit: false,
  delay: 500,
 });
 const validationResult = ref<IViewStateValidateResult>({
  valid: false,
  location: {},
  summury: {
   errors: [],
   keywords: [],
  },
  schema: {},
 });
 const validFun = useViewStateValidate(validationResult, schema, validOptions);
 const validate = () => (validFun ? validFun(data.value) : validationResult.value.valid = true);
 const debouncedValidate = useDebounceFn(
  validate,
  prop.option.validate?.delay || 500,
 );
 // Sync
 const syncFn = () => {
  if (sync) {
   validate();
   const validResult = validationResult.value;
   if (!validResult || validResult.valid) {
    sync();
   }
  }
 };
 const debouncedSync = useDebounceFn(syncFn, prop.option.sync?.delay, {
  maxWait: prop.option.sync?.maxWait,
 });
 // Pooling
 const { pause } = useIntervalFn(async () => {
  if (prop.interval && reload) {
   await reload(true);
  }
 }, prop.interval);
 //
 onNuxtReady(() => {
  validate();
 });

 const { model, updated, status, reload, sync, syncStatus, syncResult }
  = useViewStateSource(prop);

 //
 const update = (newValue: unknown) => {
  if (prop.path) {
   const newModelValue = model.value || {};
   set(newModelValue, prop.path, newValue);
   model.value = newModelValue;
  }
  else {
   model.value = newValue;
  }
  updated.value = true;
  debouncedSync();
  debouncedValidate();
 };
 //
 const setValue = (key: string, newValue: unknown) => {
  const newModelValue = cloneDeep(toValue(model.value)) || {};
  if (isNumber(prop.path)) {
   set(newModelValue, prop.path, newValue);
  }
  else if (prop.path) {
   const path = prop.path.concat('.', key);
   set(newModelValue, path, newValue);
  }
  else {
   set(newModelValue, key, newValue);
  }
  model.value = newModelValue;
  updated.value = true;
  // syncFn();
  debouncedSync();
  debouncedValidate();
 };
 //
 const data = computed({
  get() {
   if (prop.path || isNumber(prop.path)) {
    return get(model.value, prop.path);
   }
   else if (model.value) {
    return model.value;
   }
   else {
    return undefined;
   }
  },
  set(newValue) {
   update(newValue);
  },
 });
  // --- Start Async ---
 if (prop.server && reload) {
  await reload();
 }
 //
 return {
  data,
  update,
  set: setValue,
  status,
  reload,
  syncStatus,
  syncResult,
  validate,
  validationResult,
  pause,
 };
}
