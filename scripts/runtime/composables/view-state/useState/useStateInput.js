import { get, includes, isArray, isBoolean, isObject, isString, remove, set } from "../../utils/helpers.js";
import { ref, unref, watch, computed } from "#imports";
export const StateInputProps = {
  stateSrc: {
    type: Object
  },
  statePath: {
    type: String
  },
  modelValue: {
    type: [Object, Array, String, Boolean]
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
  type: {
    type: String,
    default: "text"
  }
};
export function useStateInput(props, emits) {
  if (props.type == "checkbox") {
    return useStateInputTypeCheckbox(props, emits);
  }
  if (props.type == "radio") {
    return useStateInputTypeRadio(props, emits);
  }
  return useStateInputTypeText(props, emits);
}
function useStateInputTypeText(props, emits) {
  const baseValue = ref(props.modelValue || props.value || "");
  const baseChecked = ref(false);
  const valid = ref(false);
  const updateValue = (event) => {
    if (event && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
      const newValue = event.target.value;
      baseValue.value = newValue;
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
        if (unref(props.stateSrc?.data) != baseValue.value) {
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
    if (props.validate) {
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
  validate();
  return {
    value: baseValue,
    updateValue,
    changeValue: (_) => {
    },
    classObject,
    checked: baseChecked
  };
}
function useStateInputTypeCheckbox(props, emits) {
  const baseValue = ref(props.modelValue || props.value || false);
  const baseChecked = computed(() => {
    if (isBoolean(baseValue.value)) {
      switch (baseValue.value) {
        case true:
          return true;
      }
      return false;
    } else if (isArray(baseValue.value)) {
      return includes(baseValue.value, props.value);
    }
  });
  const valid = ref(false);
  const changeValue = (event) => {
    if (event && event.target instanceof HTMLInputElement) {
      if (isArray(baseValue.value) && props.value) {
        if (event.target.checked && !baseValue.value.includes(props.value)) {
          baseValue.value.push(props.value);
        }
        if (!event.target.checked && baseValue.value.includes(props.value)) {
          remove(baseValue.value, (item) => item === props.value);
        }
        const newValue = baseValue.value;
        set(newValue, props.value, event.target.checked);
        baseValue.value = newValue;
      } else {
        baseValue.value = event.target.checked;
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
    if (props.statePath) {
      if (props.stateSrc?.data && isString(props.stateSrc?.data)) {
        throw new Error("Even though stateSrc data is of type string, statePath has been specified.");
      }
      watch(props.stateSrc?.data, () => {
        if (unref(props.stateSrc?.data) != baseValue.value) {
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
  validate();
  return {
    value: baseValue,
    updateValue: (_) => {
    },
    changeValue,
    classObject,
    checked: baseChecked
  };
}
function useStateInputTypeRadio(props, emits) {
  const baseValue = ref(props.modelValue || "");
  const baseChecked = computed(() => {
    if (isString(baseValue.value) && baseValue.value == props.value) {
      return true;
    } else {
      return false;
    }
  });
  const valid = ref(false);
  const changeValue = (event) => {
    if (event && event.target instanceof HTMLInputElement) {
      {
        baseValue.value = props.value;
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
        if (unref(props.stateSrc?.data) != baseValue.value) {
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
    if (props.validate) {
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
  validate();
  return {
    value: baseValue,
    updateValue: (_) => {
    },
    changeValue,
    classObject,
    checked: baseChecked
  };
}
