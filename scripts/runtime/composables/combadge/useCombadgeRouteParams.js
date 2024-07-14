import { useRoute, useRouter } from "#app";
import { computed, ref } from "#imports";
import { defu } from "defu";
import { isArray } from "lodash-es";
export function useCombadgeRouteParams(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      switch (prop.key) {
        case "slug":
          if (isArray(route.params.slug)) {
            return route.params.slug.join("/");
          }
          return route.params.slug;
        default:
          return route.params[prop.key];
      }
    },
    // setter 関数
    set(newValue) {
      if (newValue) {
        const query = defu({ [prop.key]: newValue }, route.params);
        const to = defu({ query }, { hash: route.hash });
        router.push(to);
      } else {
        const query = Object.assign({}, route.params);
        delete query[prop.key];
        const to = defu({ query }, { hash: route.hash });
        router.push(to);
      }
    }
  });
  return {
    model,
    updated: ref(false)
  };
}
