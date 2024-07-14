import { computed } from "vue";
import { useElementBounding } from "@vueuse/core";
export function useElementOffset(target) {
  const bounding = useElementBounding(target);
  const left = computed(() => bounding.left.value + window.pageXOffset);
  const top = computed(() => bounding.top.value + window.pageYOffset);
  return {
    left,
    top
  };
}
