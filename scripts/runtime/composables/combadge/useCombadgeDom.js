import { useRoute, useRouter } from "#app";
import { computed, ref } from "#imports";
import { defu } from "defu";
export function useCombadgeDom(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      const query = route.query;
      return query[prop.key];
    },
    // setter 関数
    set(newValue) {
      if (newValue) {
        const query = defu({ [prop.key]: newValue }, route.query);
        const to = defu({ query }, { hash: route.hash });
        router.push(to);
      } else {
        const query = Object.assign({}, route.query);
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
