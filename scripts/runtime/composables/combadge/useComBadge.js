import { useThrottleFn } from "@vueuse/core";
import { computed, onMounted, ref } from "#imports";
import { useCombadgeProp } from "./useCombadgeProp.js";
import { get, set } from "lodash-es";
import { useValidate } from "./useValidate.js";
import { useCombadgeModel } from "./useCombadgeModel.js";
export const CombadgeProps = {
  stateSrc: {
    type: String,
    requird: true,
    default: ""
  },
  stateSrcTransform: {
    type: String,
    default: void 0
  },
  statePath: {
    type: String,
    default: void 0
  },
  // stateDefault: {
  //   type: [String, Number, Object, Array],
  //   default: undefined
  // },
  throttle: {
    type: Number,
    default: 0
  },
  unauthorizedTo: {
    type: String,
    default: void 0
  }
};
export async function useCombadge(props) {
  const prop = useCombadgeProp(props);
  const isMounted = ref(false);
  onMounted(async () => {
    isMounted.value = true;
  });
  const { model, updated } = await useCombadgeModel(prop);
  const validate = useValidate(prop, model);
  const setData = (newValue) => {
    console.log("setData");
    if (prop.path) {
      const newModelValue = model.value || {};
      set(newModelValue, prop.path, newValue);
      model.value = newModelValue;
    } else {
      model.value = newValue;
    }
    updated.value = true;
    validate();
  };
  const debouncedFn = useThrottleFn(setData, props.throttle);
  const data = computed({
    get() {
      if (prop.type != "local" && prop.type != "session" || isMounted.value) {
        if (prop.path) {
          return get(model.value, prop.path);
        } else if (model.value) {
          return model.value;
        } else {
          return null;
        }
      } else {
        if (prop.path) {
          return get(prop.default, prop.path);
        } else if (prop.default) {
          return prop.default;
        } else {
          return null;
        }
      }
    },
    set(newValue) {
      debouncedFn(newValue);
    }
  });
  return {
    data
  };
}
