import type { IViewStateSourceResult, IViewStateSourceProps } from '../useViewState';
import { useState } from '#app';
import { ref } from '#imports';
//
export function useViewStateState(prop: IViewStateSourceProps): IViewStateSourceResult {
 //
 const model = useState(prop.stateKey, () => prop.default || '');
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
 };
}
