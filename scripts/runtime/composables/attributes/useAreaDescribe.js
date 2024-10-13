import { useEvent } from "../utils/useEvent.js";
import { useIDRef } from "../../composables/attributes/useID.js";
import { ref, inject, computed, provide, onMounted } from "#imports";
export function useProvideAreaDescribe() {
  const areaDescribe = ref("");
  provide("areaDescribe", areaDescribe);
}
export function useAreaDescribedby(props, elementRef) {
  const areaDescribe = ref("");
  const { exposeState } = useEvent(props, elementRef, "Describe");
  exposeState({
    areaDescribe
  });
  return {
    attr: computed(() => {
      return {
        "aria-describedby": areaDescribe.value
      };
    })
  };
}
export function useAreaDescribe(props, elementRef) {
  const areaDescribe = inject(
    "areaDescribe",
    void 0
  );
  const eid = useIDRef(props, elementRef);
  if (areaDescribe) {
    onMounted(() => {
      if (eid.value) {
        areaDescribe.value = eid.value;
      }
    });
  }
  return {};
}
