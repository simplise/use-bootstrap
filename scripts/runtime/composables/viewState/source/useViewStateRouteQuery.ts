import { isString, omit, toPlainObject, toString, defu } from '../../utils/helpers';
import type { IViewStateSourceResult, IViewStateSourceProps } from '../useViewState';
import { ref, watch } from '#imports';
import { useRoute, useRouter } from '#app';
//
export function useViewStateRouteQuery(prop: IViewStateSourceProps): IViewStateSourceResult {
 //
 const route = useRoute();
 const router = useRouter();
 //
 const defaultValue = prop.default || (prop.key ? '' : {});
 const model = ref<string | Record<string, string> | unknown>(defaultValue);
 const setModel = (newValue: string | Record<string, string> | unknown) => {
  if (model.value != newValue) {
   model.value = newValue;
  }
 };
 //
 watch(() => route.query, () => {
  const query = route.query;
  if (!prop.key) {
   setModel(query);
  }
  else if (query && query[prop.key]) {
   setModel(query[prop.key]);
  }
  else {
   setModel(defaultValue);
  }
 },
 { immediate: true });
 //
 watch(model, () => {
  sync();
 });
 //
 const sync = () => {
  const newValue = model.value;
  if (!prop.key && newValue && !isString(newValue)) {
   const query = toPlainObject(newValue);
   router.push({
    query: query,
    hash: route.hash,
    force: true, // 無いとURLがかわらない ドキュメント記載なし
   });
  }
  else if (newValue) {
   const query = defu({ [prop.key]: toString(newValue) }, route.query);
   router.push({
    query,
    hash: route.hash,
    force: true,
   });
  }
  else {
   const query = omit(toPlainObject(route.query), prop.key);
   // const to = defu({ query }, { hash: route.hash }, { force: true });
   router.push({
    query,
    hash: route.hash,
    force: true,
   });
  }
  // defaultWindow?.scrollTo({ top: 0, behavior: 'smooth' });
 };
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
  // sync,
 };
}
