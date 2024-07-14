import { useRoute } from "#app";
import { computed, ref, definePageMeta } from "#imports";
import { set } from "lodash-es";
export function useCombadgePageMeta(prop) {
  const route = useRoute();
  const model = computed({
    // getter 関数
    get() {
      return route.meta[prop.key];
    },
    // setter 関数
    set(newValue) {
      const meta = set({}, prop.key, newValue);
      definePageMeta(meta);
    }
  });
  return {
    model,
    updated: ref(false)
  };
}
