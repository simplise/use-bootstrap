import { useViewStateDomAttr } from "../view-state/source/useViewStateDomAttr.js";
import { computed } from "#imports";
export function useDarkState() {
  const htmlState = useViewStateDomAttr("html", "data-bs-theme");
  return computed(() => htmlState.model.value == "dark");
}
