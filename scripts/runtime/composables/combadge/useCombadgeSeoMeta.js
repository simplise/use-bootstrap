import { useState } from "#app";
import { ref, useSeoMeta } from "#imports";
export function useCombadgeSeoMeta(prop) {
  const model = useState(prop.stateKey, () => prop.default);
  useSeoMeta({
    [prop.key]: model
  });
  return {
    model,
    updated: ref(false)
  };
}
