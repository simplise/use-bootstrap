import { ref, inject, computed, onMounted } from "vue";
import { useEvent } from "../../utils/useEvent.mjs";
import { useIDRef } from "../../composables/attributes/useID.mjs";
export function useAreaLabelledby(props, elementRef) {
  const areaLabel = ref("");
  const { exposeState } = useEvent(props, elementRef, "label");
  exposeState({
    areaLabel
  });
  return {
    attr: computed(() => {
      return {
        "aria-labelledby": areaLabel.value
      };
    })
  };
}
export function useAreaLabel(props, elementRef) {
  const areaLabel = inject("areaLabel", void 0);
  const eid = useIDRef(props, elementRef);
  if (areaLabel) {
    onMounted(() => {
      if (eid.value) {
        areaLabel.value = eid.value;
      }
    });
  }
  return {};
}
