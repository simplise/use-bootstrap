import type { FetchContext } from 'ofetch';
import type { IActionProp } from './useActionState';
import type { Ref } from '#imports';
//
export async function fetchAction(
 method:
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'get'
  | 'head'
  | 'patch'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace',
 params: unknown,
 actionProp: IActionProp,
 status: Ref<number>,
 data: Ref<unknown>,
): Promise<void> {
 //
 const response = await $fetch(actionProp.url, {
  method: method,
  body: params,
  retry: 10,
  retryDelay: 1000,
  ignoreResponseError: true,
  async onResponse(context: FetchContext) {
   status.value = context.response?.status || 400;
  },
 });
 //
 data.value = response;
}
