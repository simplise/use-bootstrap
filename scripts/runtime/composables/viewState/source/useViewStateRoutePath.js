import { useRoute, useRouter } from "#app";
import { computed, ref } from "#imports";
export function useViewStateRoutePath(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = computed({
    // getter 関数
    get() {
      const arr = route.path.split("/");
      arr.shift();
      const pathIndex = Number(prop.key);
      if (prop.key !== "" && !Number.isNaN(pathIndex)) {
        return arr[pathIndex];
      } else {
        return arr;
      }
    },
    // setter 関数
    set(newValue) {
      const pathIndex = Number(prop.key);
      if (prop.key !== "" && !Number.isNaN(pathIndex)) {
        const arr = route.path.split("/");
        arr.shift();
        arr[pathIndex] = newValue;
        const newPath = `/${arr.join("/")}`;
        router.push({ path: newPath });
      } else {
        const newPath = `/${newValue.join("/")}`;
        router.push({ path: newPath });
      }
    }
  });
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
