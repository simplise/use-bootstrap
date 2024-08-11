import { useDebounceFn, useIntervalFn } from "@vueuse/core";
import defu from "defu";
import { get, isNumber, set } from "lodash-es";
import { useViewStateValidate } from "../viewState/useViewStateValidate.js";
import { useViewStateSource } from "../viewState/useViewStateSource.js";
import { useViewStateSourceProp } from "../viewState/useViewStateSourceProp.js";
import { computed, onNuxtReady, ref } from "#imports";
export const ViewStateProps = {
  src: {
    // Source URI
    type: String,
    requird: false
  },
  path: {
    // Result Path
    type: [String, Number]
  },
  schemaSrc: {
    // JsonSchema Validator
    type: String
  },
  data: {
    // Default Data, Data Passthrough
    type: [Object, Array, String, Number],
    requird: false
  }
};
export async function useViewState(props, schema) {
  const prop = useViewStateSourceProp(props);
  const validOptions = defu(prop.validationOptions, {
    shortCircuit: false,
    delay: 500
  });
  const validationResult = ref({
    valid: false,
    location: {},
    summury: {
      errors: [],
      keywords: []
    },
    schema: {}
  });
  const validFun = useViewStateValidate(validationResult, schema, validOptions);
  const validate = () => validFun ? validFun(data.value) : void 0;
  const debouncedValidate = useDebounceFn(
    validate,
    prop.option.validate?.delay || 500
  );
  const syncFn = () => {
    if (sync) {
      validate();
      const validResult = validationResult.value;
      if (!validResult || validResult.valid) {
        sync();
      }
    }
  };
  const debouncedSync = useDebounceFn(syncFn, prop.option.sync?.delay, {
    maxWait: prop.option.sync?.maxWait
  });
  const { pause } = useIntervalFn(async () => {
    if (prop.interval && reload) {
      await reload(true);
    }
  }, prop.interval);
  onNuxtReady(() => {
    validate();
  });
  const { model, updated, status, reload, sync, syncStatus, syncResult } = await useViewStateSource(prop);
  const update = (newValue) => {
    if (prop.path) {
      const newModelValue = model.value || {};
      set(newModelValue, prop.path, newValue);
      model.value = newModelValue;
    } else {
      model.value = newValue;
    }
    updated.value = true;
    debouncedSync();
    debouncedValidate();
  };
  const setValue = (key, newValue) => {
    const newModelValue = model.value || {};
    if (isNumber(prop.path)) {
      set(newModelValue, prop.path, newValue);
    } else if (prop.path) {
      const path = prop.path.concat(".", key);
      set(newModelValue, path, newValue);
    } else {
      set(newModelValue, key, newValue);
    }
    model.value = newModelValue;
    updated.value = true;
    debouncedSync();
    debouncedValidate();
  };
  const data = computed({
    get() {
      if (prop.path || isNumber(prop.path)) {
        return get(model.value, prop.path);
      } else if (model.value) {
        return model.value;
      } else {
        return void 0;
      }
    },
    set(newValue) {
      update(newValue);
    }
  });
  return {
    data,
    update,
    set: setValue,
    status,
    reload,
    syncStatus,
    syncResult,
    validate,
    validationResult,
    pause
  };
}
