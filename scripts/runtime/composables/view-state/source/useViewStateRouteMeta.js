import { useRoute } from "#app";
import { computed, ref } from "#imports";
export function useViewStateRouteMeta(prop) {
  const route = useRoute();
  const model = computed({
    // getter 関数
    get() {
      switch (prop.key) {
        case "meta":
          return route.meta || {};
        // case 'matched':
        //  return toPlainObject(route.matched);
        case "full-path":
          return route.fullPath || "";
        case "name":
          return route.name || "";
        case "redirected":
          return route.redirectedFrom || "";
        case "path":
          return route.path || "";
        default:
          throw new Error("Does not support RouteMeta key");
      }
    },
    // setter 関数
    set(_) {
      throw new Error("Does not support changing RouteMeta");
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
