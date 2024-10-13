import { defu } from "../../utils/helpers.js";
import { useModuleOptions } from "./useModuleOptions.js";
import { useRoute, computed } from "#imports";
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
