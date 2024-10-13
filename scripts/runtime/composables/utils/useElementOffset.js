import { useElementBounding } from "../utils/helpers.js";
import { computed } from "#imports";
export function useElementOffset(target) {
  const bounding = useElementBounding(target);
  const left = computed(() => bounding.left.value + window.pageXOffset);
  const top = computed(() => bounding.top.value + window.pageYOffset);
  return {
    left,
    top
  };
}
