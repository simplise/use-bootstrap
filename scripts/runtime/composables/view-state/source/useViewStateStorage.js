import { useStorage } from "../../utils/helpers.js";
import { ref, watch } from "#imports";
export function useViewStateStorage(type, key, defaultValue) {
  const stateKey = `_viewstate_base_state_${key}`;
  const storage = useStorage(
    stateKey,
    JSON.stringify(defaultValue),
    type == "local" ? window.localStorage : window.sessionStorage
  );
  const reloadModel = () => {
    return storage.value ? JSON.parse(storage.value) : "";
  };
  const model = ref(defaultValue || reloadModel() || "");
  const setModel = (newValue) => {
    if (model.value != newValue) {
      model.value = newValue;
    }
  };
  watch(storage, () => {
    setModel(reloadModel());
  });
  watch(model, () => {
    sync();
  });
  const sync = () => {
    const result = JSON.stringify(model.value);
    if (storage.value != result) {
      storage.value = result;
    }
  };
  return {
    model,
    updated: ref(false),
    status: ref(200)
    // sync,
  };
}
