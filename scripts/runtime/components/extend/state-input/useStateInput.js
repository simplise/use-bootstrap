import { get, isObject, isString } from "lodash-es";
import { ref, unref, watch } from "#imports";
export function useStateInput(props, emits) {
  const value = ref(props.modelValue || "");
  const updateValue = (event) => {
    if (event && event.target instanceof HTMLInputElement) {
      const newValue = event.target.value;
      value.value = newValue;
      emits("update:modelValue", newValue);
      if (props.stateSrc) {
        if (props.statePath) {
          props.stateSrc.set(props.statePath, newValue);
        } else {
          props.stateSrc.update(newValue);
        }
      }
    }
  };
  const reloadState = () => {
    if (props.stateSrc) {
      const data = unref(props.stateSrc.data);
      if (props.statePath) {
        value.value = get(data, props.statePath);
      } else {
        value.value = data;
      }
    }
  };
  reloadState();
  if (props.modelValue) {
    watch(() => props.modelValue, (newValue) => {
      if (newValue !== void 0) {
        value.value = newValue;
      }
    });
  }
  if (props.stateSrc) {
    if (props.statePath) {
      if (props.stateSrc?.data && isString(props.stateSrc?.data)) {
        throw new Error("Even though stateSrc data is of type string, statePath has been specified.");
      }
      watch(props.stateSrc?.data, () => {
        if (unref(props.stateSrc?.data) != value.value) {
          reloadState();
        }
      });
    } else {
      if (props.stateSrc?.data && isObject(props.stateSrc?.data)) {
        throw new Error("Even though stateSrc data is of type object, statePath has not been specified.");
      }
      watch(() => props.stateSrc?.data, () => {
        if (unref(props.stateSrc?.data) != value.value) {
          reloadState();
        }
      });
    }
  }
  return {
    value,
    updateValue
  };
}
