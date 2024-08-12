import {
  defaultDocument
} from "./helpers.js";
import { ref, watch, onMounted } from "#imports";
import { useRoute } from "#app";
export function useDomExists(selector) {
  const isExists = ref(false);
  const isMounted = ref(false);
  const route = useRoute();
  const check = () => {
    if (selector && isMounted.value) {
      const document = defaultDocument;
      const selected = document?.querySelector(selector);
      if (selected) {
        isExists.value = true;
      } else {
        isExists.value = false;
      }
    } else if (selector) {
      isExists.value = false;
    } else {
      isExists.value = true;
    }
  };
  onMounted(() => {
    isMounted.value = true;
    check();
  });
  watch(() => route.fullPath, () => {
    check();
  });
  return isExists;
}
