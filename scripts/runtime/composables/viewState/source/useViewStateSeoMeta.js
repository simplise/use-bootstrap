import { useState } from "#app";
import { ref, useSeoMeta, computed } from "#imports";
export function useViewStateSeoMeta(prop) {
  const base = useState(prop.stateKey, () => prop.default);
  base.value = useSeoMeta({});
  const model = computed({
    // getter 関数
    get() {
      return base.value;
    },
    // setter 関数
    set(_) {
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
