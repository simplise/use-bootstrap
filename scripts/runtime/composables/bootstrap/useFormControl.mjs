import { computed } from "vue";
import { addProp, hasValue } from "../../utils/useProps.mjs";
export const FormControlProps = {
  size: {
    type: String
    //sm, lg
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
