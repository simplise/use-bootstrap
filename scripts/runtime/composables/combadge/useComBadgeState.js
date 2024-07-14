import { useState } from "#app";
import { ref } from "#imports";
export function useCombadgeState(prop) {
  const model = useState(prop.stateKey, () => prop.default);
  return {
    model,
    updated: ref(false)
  };
}
