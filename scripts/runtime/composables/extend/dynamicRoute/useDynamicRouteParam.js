import { useRoute, computed } from "#imports";
import { useModuleOptions } from "./useModuleOptions.js";
export function useDynamicRouteParam(paramName) {
  const route = useRoute();
  const options = useModuleOptions();
  return computed(() => {
    return route.params[paramName] || options?.defaults[paramName];
  });
}
