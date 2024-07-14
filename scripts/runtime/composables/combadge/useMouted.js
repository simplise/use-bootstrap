import { onMounted, ref } from "#imports";
import { isClient } from "@vueuse/core";
export function useMounted() {
  const result = ref(false);
  if (isClient) {
    onMounted(() => {
      return true;
    });
  }
  return result;
}
