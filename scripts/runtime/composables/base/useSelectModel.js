import { isArray } from "../utils/helpers.js";
import { onMounted, watch } from "#imports";
export const SelectModelProps = {
  modelValue: {
    type: [String, Number, Array]
  }
};
export const SelectModelEmits = ["update:modelValue"];
export function useSelectModel(props, emit, elementRef) {
  const refresh = () => {
    if (elementRef.value && props.modelValue) {
      if (elementRef.value instanceof HTMLSelectElement) {
        if (elementRef.value.multiple) {
          Array.from(elementRef.value.options).forEach((n) => {
            if (isArray(props.modelValue)) {
              if (props.modelValue.some((i) => i == n.value)) {
                n.selected = true;
              } else {
                n.selected = false;
              }
            }
          });
        } else {
          elementRef.value.value = props.modelValue.toString();
        }
      }
    }
  };
  onMounted(() => {
    refresh();
  });
  watch(
    () => props.modelValue,
    () => {
      refresh();
    }
  );
  return {
    event: {
      onChange: (event) => {
        const { target } = event;
        if (target instanceof HTMLSelectElement) {
          if (target.multiple) {
            const values = Array.from(target.selectedOptions, (n) => n.value);
            emit("update:modelValue", values);
          } else if (target.selectedIndex > -1) {
            emit("update:modelValue", target.value);
          }
        }
      }
    }
  };
}
