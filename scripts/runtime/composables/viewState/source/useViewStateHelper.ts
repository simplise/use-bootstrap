import type { IViewStateSourceResult, IViewStateSourceProps, ViewStateNuxtHelper } from '../useViewState';
import { useNuxtApp } from '#app';
import { ref } from '#imports';

// Nuxt plugin helper
export function useViewStateHelper(prop: IViewStateSourceProps): IViewStateSourceResult {
 //
 const nuxtApp = useNuxtApp();
 const helperName = `$${prop.key}`;
 //
 const appHelper = nuxtApp[helperName] as undefined | ViewStateNuxtHelper;
 //
 if (!appHelper) {
  throw new Error('plugin helper Not Found');
 }
 const result = appHelper();

 //
 return {
  model: result.data,
  updated: ref(false),
  status: result.status,
 };
}
