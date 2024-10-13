import { addProp, hasValue } from "../../composables/utils/useProps.js";
import { computed } from "#imports";
export const FormControlProps = {
  size: {
    type: String
    // sm, lg
  },
  disabled: {
    type: [Boolean, String]
  },
  readonly: {
    type: [Boolean, String]
  }
};
export function useFormControl(props) {
  return {
    class: computed(() => {
      return {
        [`form-control${hasValue(props.readonly) ? "-plaintext" : ""}`]: true,
        [`form-control-${props.size}`]: props.size
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.readonly, "readonly", "readonly"),
        ...addProp(props.disabled, "disabled", "disabled"),
        ...addProp(props.placeholder, "placeholder", `${props.placeholder}`)
      };
    })
  };
}
