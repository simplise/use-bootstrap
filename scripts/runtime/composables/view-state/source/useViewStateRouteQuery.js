import { isString, omit, toPlainObject, toString, defu } from "../../utils/helpers.js";
import { ref, watch } from "#imports";
import { useRoute, useRouter } from "#app";
export function useViewStateRouteQuery(prop) {
  const route = useRoute();
  const router = useRouter();
  const defaultValue = prop.default || (prop.key ? "" : {});
  const model = ref(defaultValue);
  const setModel = (newValue) => {
    if (model.value != newValue) {
      model.value = newValue;
    }
  };
  watch(
    () => route.query,
    () => {
      const query = route.query;
      if (!prop.key) {
        setModel(query);
      } else if (query && query[prop.key]) {
        setModel(query[prop.key]);
      } else {
        setModel(defaultValue);
      }
    },
    { immediate: true }
  );
  watch(model, () => {
    sync();
  });
  const sync = () => {
    const newValue = model.value;
    if (!prop.key && newValue && !isString(newValue)) {
      const query = toPlainObject(newValue);
      router.push({
        query,
        hash: route.hash,
        force: true
        // 無いとURLがかわらない ドキュメント記載なし
      });
    } else if (newValue) {
      const query = defu({ [prop.key]: toString(newValue) }, route.query);
      router.push({
        query,
        hash: route.hash,
        force: true
      });
    } else {
      const query = omit(toPlainObject(route.query), prop.key);
      router.push({
        query,
        hash: route.hash,
        force: true
      });
    }
  };
  return {
    model,
    updated: ref(false),
    status: ref(200)
    // sync,
  };
}
