import { useViewStateDomAttr } from "../view-state/source/useViewStateDomAttr.js";
import { useViewStateStorage } from "../view-state/source/useViewStateStorage.js";
import { onMounted, ref, watch } from "#imports";
export function useDark() {
  const htmlState = useViewStateDomAttr("html", "data-bs-theme");
  const result = ref(htmlState.model.value == "dark");
  onMounted(() => {
    const storage = useViewStateStorage("local", "data-bs-theme", false);
    if (result.value != storage.model.value) {
      result.value = storage.model.value;
      if (result.value) {
        htmlState.model.value = "dark";
      } else {
        htmlState.model.value = "";
      }
    }
  });
  watch(result, () => {
    const storage = useViewStateStorage("local", "data-bs-theme", false);
    storage.model.value = result.value;
    if (result.value) {
      htmlState.model.value = "dark";
    } else {
      htmlState.model.value = "";
    }
  });
  return result;
}
