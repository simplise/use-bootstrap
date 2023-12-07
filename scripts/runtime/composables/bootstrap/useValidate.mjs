import { computed, ref } from "vue";
import { unrefElement } from "../../utils/helpers.mjs";
import { addProp } from "../../utils/useProps.mjs";
export const ValidateProps = {
  validation: {
    type: Boolean
  },
  wasVlidated: {
    type: Boolean
  }
};
export function useValidate(props, elementRef) {
  if (!props.validation) {
    return {};
  }
  const validated = ref(false);
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
        ...addProp(props.validation, "novalidate", "novalidate")
      };
    }),
    event: {
      onSubmit: validate
    }
  };
}
