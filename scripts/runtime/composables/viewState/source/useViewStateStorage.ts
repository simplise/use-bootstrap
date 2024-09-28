import { useStorage } from '../../utils/helpers';
import type { IViewStateSourceResult } from '../useViewState';
import { ref, watch } from '#imports';
// https://vueuse.org/core/useStorage/
// シリアライザを登録するとオブジェクトでも登録できると記載があるが、動作しなかった 2024/8/2
export function useViewStateStorage(
 type: 'local' | 'session',
 key: string,
 defaultValue?: unknown,
): IViewStateSourceResult {
 //
 const stateKey = `_viewstate_base_state_${key}`;
 const storage = useStorage(
  stateKey,
  JSON.stringify(defaultValue),
  type == 'local' ? window.localStorage : window.sessionStorage,
 );
 const reloadModel = () => {
  return storage.value ? JSON.parse(storage.value) : '';
 };
 const model = ref(defaultValue || reloadModel() || '');
 const setModel = (newValue: object) => {
  if (model.value != newValue) {
   model.value = newValue;
  }
 };

 watch(storage, () => {
  setModel(reloadModel());
 });

 watch(model, () => {
  sync();
 });

 const sync = () => {
  const result = JSON.stringify(model.value);
  if (storage.value != result) {
   storage.value = result;
  }
 };
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
  // sync,
 };
}
