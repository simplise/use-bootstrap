import { computed } from "#imports";
export const ValidProps = {
  inValid: {
    type: [Boolean, Array],
    // true, false, invalid , valid , is-invalid, is-valid
    default: void 0
  },
  validate: {
    type: Boolean,
    // true, false, invalid , valid , is-invalid, is-valid
    default: void 0
  }
};
export function useValid(props) {
  return {
    class: computed(() => {
      return {
        [`is-${props.inValid ? "invalid" : "valid"}`]: props.validate
      };
    })
  };
}
