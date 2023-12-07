import { ref, computed } from "vue";
import { isBoolean, isString } from "../../utils/helpers.mjs";
import { isPropDefined } from "../../utils/useProps.mjs";
export const ValidProps = {
  valid: {
    type: [Boolean, String]
    //true, false, invalid , valid , is-invalid, is-valid
  }
};
export function useValid(props) {
  const valid = ref(void 0);
  if (isPropDefined(props.valid)) {
    if (isString(props.valid) && ["valid", "is-valid", "true", ""].includes(props.valid)) {
      valid.value = true;
    } else if (isBoolean(props.valid) && props.valid) {
      valid.value = true;
    } else {
      valid.value = false;
    }
  }
  return {
    class: computed(() => {
      return {
        [`is-${valid.value ? "valid" : "invalid"}`]: valid.value != void 0
      };
    })
  };
}
