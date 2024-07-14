import { useRoute, computed } from "#imports";
import { defu } from "defu";
import { useModuleOptions } from "./useModuleOptions.js";
export function useDynamicRoute(path) {
  const options = useModuleOptions();
  const route = useRoute();
  return computed(() => {
    const params = defu(route.params, options?.defaults);
    const regex = /\[(\w+)\]/g;
    let result;
    let res = path;
    while ((result = regex.exec(path)) !== null) {
      res = res.replace(result[0], params[result[1]]);
    }
    return res;
  });
}
