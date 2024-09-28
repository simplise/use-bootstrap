import { get } from '../../../composables/utils/helpers';
import { useModuleOptions } from './useModuleOptions';
import { useRoute, computed } from '#imports';
//
export function useDynamicRouteParam(paramName: string) {
 //
 const route = useRoute();
 const options = useModuleOptions();
 //
 return computed(() => {
  return route.params[paramName] || get(options?.defaults, paramName);
 });
}
