import { ref, onMounted } from "#imports";
import { useStorage } from "@vueuse/core";
export function useCombadgeStorage(prop, storage) {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  const model = useStorage(prop.stateKey, prop.default || "", storage == "local" ? window.localStorage : window.sessionStorage);
  return {
    model,
    updated: ref(false)
  };
}
