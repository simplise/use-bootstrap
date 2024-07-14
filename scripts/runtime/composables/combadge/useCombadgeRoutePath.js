import { useRoute, useRouter } from "#app";
import { computed, ref } from "#imports";
import { toInteger } from "lodash-es";
export function useCombadgeRoutePath(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      const pathIndex = toInteger(prop.key);
      const path = route.path;
      const arr = path.split("/");
      return arr[pathIndex + 1];
    },
    // setter 関数
    set(newValue) {
      const pathIndex = toInteger(prop.key);
      const path = route.path;
      const arr = path.split("/");
      arr[pathIndex + 1] = newValue;
      const newPath = arr.join("/");
      router.push({ path: newPath });
    }
  });
  return {
    model,
    updated: ref(false)
  };
}
