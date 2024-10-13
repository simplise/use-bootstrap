import { get, isObject, isString } from "../../utils/helpers.js";
import { ref, unref, watch, computed, onMounted } from "#imports";
export const StateSelectProps = {
  stateSrc: {
    type: Object
  },
  statePath: {
    type: String
  },
  modelValue: {
    type: [String]
  },
  validate: {
    type: Boolean
  },
  inValid: {
    type: Boolean
  },
  value: {
    type: String
  },
  multiple: {
    type: Boolean
  }
};
export function useStateSelect(props, elementRef, emits) {
  const baseValue = ref(props.modelValue ? props.modelValue : props.multiple ? [] : "");
  const valid = ref(false);
  const changeValue = (event) => {
    if (event && event.target instanceof HTMLSelectElement) {
      {
        if (props.multiple) {
          baseValue.value = Array.from(event.target.options).filter((item) => item.selected).map((item) => item.value);
        } else {
          baseValue.value = event.target.value;
        }
      }
      emits("update:modelValue", baseValue.value);
      if (props.stateSrc) {
        if (props.statePath) {
          props.stateSrc.set(props.statePath, baseValue.value);
        } else {
          props.stateSrc.update(baseValue.value);
        }
      }
    }
  };
  const reloadState = () => {
    if (props.stateSrc) {
      const data = unref(props.stateSrc.data);
      if (props.statePath) {
        baseValue.value = get(data, props.statePath);
      } else {
        baseValue.value = data;
      }
    }
  };
  reloadState();
  const validate = () => {
    if (props.validate && props.stateSrc) {
      const validationResult = unref(props.stateSrc?.validationResult);
      if (props.statePath) {
        const pathResult = get(validationResult.location, props.statePath);
        valid.value = !pathResult;
      } else {
        valid.value = validationResult.valid;
      }
    }
  };
  if (props.modelValue !== void 0) {
    watch(() => props.modelValue, (newValue) => {
      if (newValue !== void 0 && baseValue.value != newValue) {
        baseValue.value = newValue;
      }
    });
  }
  if (props.value !== void 0) {
    watch(() => props.value, (newValue) => {
      if (newValue !== void 0 && baseValue.value != newValue) {
        baseValue.value = newValue;
      }
    });
  }
  if (props.stateSrc !== void 0) {
    if (props.statePath !== void 0) {
      if (props.stateSrc?.data && isString(props.stateSrc?.data)) {
        throw new Error("Even though stateSrc data is of type string, statePath has been specified.");
      }
      watch(props.stateSrc?.data, () => {
        if (props.statePath && get(unref(props.stateSrc?.data), props.statePath) != baseValue.value) {
          reloadState();
        }
      });
    } else {
      if (props.stateSrc?.data && isObject(props.stateSrc?.data)) {
        throw new Error("Even though stateSrc data is of type object, statePath has not been specified.");
      }
      watch(() => props.stateSrc?.data, () => {
        if (unref(props.stateSrc?.data) != baseValue.value) {
          reloadState();
        }
      });
    }
    watch(() => props.stateSrc?.validationResult, () => {
      validate();
    });
  }
  const classObject = computed(() => {
    if (props.validate !== void 0) {
      if (props.stateSrc !== void 0) {
        return {
          [`is-${valid.value ? "valid" : "invalid"}`]: true
        };
      } else {
        return {
          [`is-${!props.inValid ? "valid" : "invalid"}`]: true
        };
      }
    } else {
      return {};
    }
  });
  onMounted(() => {
    if (elementRef.value) {
      if (props.multiple) {
        Array.from(elementRef.value.options).forEach((option) => {
          if (baseValue.value.includes(option.value)) {
            option.selected = true;
          }
        });
      } else {
        Array.from(elementRef.value.options).forEach((option) => {
          if (elementRef.value && option.value == baseValue.value) {
            option.selected = true;
          }
        });
      }
    }
  });
  validate();
  return {
    value: baseValue,
    changeValue,
    classObject
  };
}
