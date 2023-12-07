import { provide, ref, inject, computed, onMounted, getCurrentInstance } from "vue";
import { unrefElement } from "../../utils/helpers.mjs";
export const IDProps = {
  id: {
    type: String,
    default: void 0
  }
};
export const TemplateProps = {
  template: {
    type: String
  }
};
export function useID(props, name = "component") {
  const id = props.id || uniqueId(`${name}_`);
  provide(`id.${name}`, id);
  return {
    attr: computed(() => {
      return {
        id
      };
    })
  };
}
export function useIDRef(props, elementRef) {
  const id = ref(props.id);
  onMounted(() => {
    const element = unrefElement(elementRef);
    id.value = element?.id;
  });
  return id;
}
export function injectID(options = {}) {
  const { name = "component", defaultValue = uniqueId(`${name}_`) } = options;
  return inject(`id.${name}`, defaultValue);
}
export function useIDItem(props, options = {}) {
  return {
    attr: {
      id: props.id || injectID(options)
    }
  };
}
export function uniqueId(prefix) {
  const instance = getCurrentInstance();
  const uid = instance?.uid;
  return `${prefix}${uid}`;
}
