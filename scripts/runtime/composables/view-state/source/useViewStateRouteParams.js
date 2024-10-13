import { isArray, omit, toPlainObject, defu } from "../../utils/helpers.js";
import { useRoute, useRouter } from "#app";
import { ref } from "#imports";
export function useViewStateRouteParams(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = ref();
  const setModel = (newValue) => {
    if (model.value != newValue) {
      model.value = newValue;
    }
  };
  watch(() => route.params, () => {
    switch (prop.key) {
      case "slug":
        if (isArray(route.params.slug)) {
          setModel(route.params.slug.join("/"));
        }
        setModel(route.params.slug);
        break;
      default:
        setModel(route.params[prop.key]);
    }
  });
  watch(model, () => {
    sync();
  });
  const sync = () => {
    if (model.value) {
      const query = defu({ [prop.key]: model.value }, route.params);
      const to = defu({ query }, { hash: route.hash });
      router.push(to);
    } else {
      const query = toPlainObject(route.params);
      omit(query, prop.key);
      const to = defu({ query }, { hash: route.hash });
      router.push(to);
    }
  };
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
