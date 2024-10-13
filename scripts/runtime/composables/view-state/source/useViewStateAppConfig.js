import { get } from "../../utils/helpers.js";
import { useAppConfig } from "#app";
import { ref, computed } from "#imports";
export function useViewStateAppConfig(prop) {
  const appConfig = useAppConfig();
  const path = prop.key.replace(/\//g, ".");
  const data = get(appConfig, path);
  const model = computed(() => data);
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
