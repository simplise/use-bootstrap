import { defu } from '../../utils/helpers';
import { useModuleOptions } from './useModuleOptions';
import { useRoute, computed } from '#imports';
// https://github.com/pillarjs/path-to-regexp/tree/v1.7.0
export function useDynamicRoute(path: string) {
 //
 const options = useModuleOptions();
 const route = useRoute();
 //
 return computed(() => {
  //
  const params = defu(route.params as Record<string, string>, options?.defaults);
  //
  const regex = /\[(\w+)\]/g;
  let result;
  let res = path;
  while ((result = regex.exec(path)) !== null) {
   res = res.replace(result[0], params[result[1]]);
  }
  return res;
 });
}
