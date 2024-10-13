import { get } from "../../../composables/utils/helpers.js";
import { useModuleOptions } from "./useModuleOptions.js";
import { useRoute, computed } from "#imports";
export function useDynamicRouteParam(paramName) {
  const route = useRoute();
  const options = useModuleOptions();
  return computed(() => {
    return route.params[paramName] || get(options?.defaults, paramName);
  });
}
