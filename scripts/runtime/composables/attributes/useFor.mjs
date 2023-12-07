import { ref, computed } from "vue";
import { injectID } from "../../composables/attributes/useID.mjs";
import { addProp } from "../../utils/useProps.mjs";
export const ForProps = {
  for: {
    type: String
  }
};
export function useFor(props, options) {
  const id = props.for || injectID(options);
  const useDOM = ref(id ? true : false);
  return {
    class: {},
    attr: computed(() => {
      return {
        ...addProp(id, "for", id)
      };
    }),
    state: {
      id,
      useDOM
    }
  };
}
