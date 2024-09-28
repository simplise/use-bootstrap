import type { IActionProp, IActionStateHelperProps } from './useActionState';
import type { Ref } from '#imports';
import { useNuxtApp } from '#app';
//
export async function helperAction(
 method: string,
 params: unknown,
 actionProp: IActionProp,
 status: Ref<number>,
 data: Ref<unknown>,
): Promise<void> {
 //
 const nuxtApp = useNuxtApp();
 const helperName = `$${actionProp.key}`;
 const actionHelper = nuxtApp[helperName] as
  | undefined
  | ((props: IActionStateHelperProps) => Promise<void>);
 //
 if (!actionHelper) {
  throw new Error('plugin helper Not Found');
 }
 //
 await actionHelper({ method, params, status, data });
}
