import { useViewStateDomAttr } from "../view-state/source/useViewStateDomAttr.js";
import { onMounted, ref, watch } from "#imports";
export function useDarkTemp() {
  const htmlState = useViewStateDomAttr("html", "data-bs-theme");
  const result = ref(htmlState.model.value == "dark");
  onMounted(() => {
    if (result.value) {
      htmlState.model.value = "dark";
    } else {
      htmlState.model.value = "";
    }
  });
  watch(result, () => {
    if (result.value) {
      htmlState.model.value = "dark";
    } else {
      htmlState.model.value = "";
    }
  });
  return result;
}
