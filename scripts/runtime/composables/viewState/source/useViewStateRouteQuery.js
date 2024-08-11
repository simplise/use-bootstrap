import { defu } from "defu";
import { defaultWindow } from "@vueuse/core";
import { isString, omit, toPlainObject, toString } from "lodash-es";
import { computed, ref } from "#imports";
import { useRoute, useRouter } from "#app";
export function useViewStateRouteQuery(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      const query = route.query;
      if (!prop.key) {
        return query;
      }
      if (query && query[prop.key]) {
        return query[prop.key];
      } else {
        return "";
      }
    },
    // setter 関数
    set(newValue) {
      if (!prop.key && newValue && !isString(newValue)) {
        router.push({
          query: toPlainObject(newValue),
          hash: route.hash
        });
      } else if (newValue) {
        const query = defu({ [prop.key]: toString(newValue) }, route.query);
        router.push({
          query,
          hash: route.hash
        });
      } else {
        const query = toPlainObject(route.query);
        omit(query, prop.key);
        const to = defu({ query }, { hash: route.hash });
        router.push(to);
      }
      defaultWindow?.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
