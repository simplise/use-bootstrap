import { unrefElement } from "../utils/helpers.js";
import { addProp } from "../../composables/utils/useProps.js";
import { computed, ref } from "#imports";
export const ValidateProps = {
  novalidate: {
    type: Boolean
  },
  wasVlidated: {
    type: Boolean,
    default: false
  }
};
export function useValidate(props, elementRef) {
  const validated = ref(props.wasVlidated);
  const validate = (event) => {
    const element = unrefElement(elementRef);
    if (element && !element.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    validated.value = true;
  };
  return {
    class: computed(() => {
      return {
        "was-validated": validated.value
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.novalidate, "novalidate", "novalidate")
      };
    }),
    event: {
      onSubmit: validate
    }
  };
}
