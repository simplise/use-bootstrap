import { useModuleOptions } from "./useModuleOptions.js";
import { useRoute, computed } from "#imports";
export function useDynamicRouteParam(paramName) {
  const route = useRoute();
  const options = useModuleOptions();
  return computed(() => {
    return route.params[paramName] || options?.defaults[paramName];
  });
}
