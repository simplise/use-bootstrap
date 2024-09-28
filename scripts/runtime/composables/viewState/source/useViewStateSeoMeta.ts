import type {
 IViewStateSourceResult,
 IViewStateSourceProps,
} from '../useViewState';
import { useState } from '#app';
import { ref, useSeoMeta, computed } from '#imports';
//
export function useViewStateSeoMeta(
 prop: IViewStateSourceProps,
): IViewStateSourceResult {
 //
 const base = useState(prop.stateKey, () => prop.default);
 //
 base.value = useSeoMeta({});
 const model = computed({
  //
  get() {
   return base.value;
  },
  //
  set(_) {},
 });
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
 };
}
