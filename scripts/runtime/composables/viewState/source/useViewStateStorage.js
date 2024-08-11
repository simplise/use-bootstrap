import { useStorage } from "@vueuse/core";
import { computed, ref } from "#imports";
export function useViewStateStorage(prop) {
  const storage = useStorage(
    prop.stateKey,
    JSON.stringify(prop.default),
    prop.type == "local" ? window.localStorage : window.sessionStorage
  );
  const model = computed({
    // getter 関数
    get() {
      const result = storage.value ? JSON.parse(storage.value) : null;
      return result;
    },
    // setter 関数
    set(newValue) {
      const result = JSON.stringify(newValue);
      storage.value = result;
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
