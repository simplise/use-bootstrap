import { get, isString } from "../../utils/helpers.js";
import { ref, unref, watch, computed } from "#imports";
export const StateComponentProps = {
  stateSrc: {
    type: Object
  },
  statePath: {
    type: String
  },
  validate: {
    type: Boolean
  }
};
export function useStateComponent(props, model) {
  const baseValue = ref(model.value);
  const valid = ref(false);
  const updateValue = (newValue) => {
    baseValue.value = newValue;
    if (props.stateSrc) {
      if (props.statePath) {
        props.stateSrc.set(props.statePath, newValue);
      } else {
        props.stateSrc.update(newValue);
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
      model.value = baseValue.value;
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
      }
    } else {
      return {};
    }
  });
  watch(model, () => {
    updateValue(model.value);
  });
  validate();
  return {
    value: baseValue,
    updateValue,
    classObject
  };
}
