import { trimStart, defu } from "../../utils/helpers.js";
import { useRoute, useRouter } from "#app";
import { computed, ref } from "#imports";
export function useViewStateRouteHash() {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      const hash = trimStart(route.hash, "#");
      return hash;
    },
    // setter 関数
    set(newValue) {
      const hash = newValue ? `#${newValue}` : "";
      const to = defu({ hash }, { query: route.query });
      router.replace(to);
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
