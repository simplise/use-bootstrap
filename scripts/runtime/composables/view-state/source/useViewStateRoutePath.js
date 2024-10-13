import { useRoute, useRouter } from "#app";
import { ref } from "#imports";
export function useViewStateRoutePath(prop) {
  const route = useRoute();
  const router = useRouter();
  const model = ref();
  const setModel = (newValue) => {
    if (model.value != newValue) {
      model.value = newValue;
    }
  };
  watch(
    () => route.path,
    () => {
      const arr = route.path.split("/");
      arr.shift();
      const pathIndex = Number(prop.key);
      if (prop.key !== "" && !Number.isNaN(pathIndex)) {
        setModel(arr[pathIndex]);
      } else {
        setModel(arr);
      }
    },
    { immediate: true }
  );
  watch(model, () => {
    sync();
  });
  const sync = () => {
    const pathIndex = Number(prop.key);
    if (prop.key !== "" && !Number.isNaN(pathIndex)) {
      const arr = route.path.split("/");
      arr.shift();
      arr[pathIndex] = model.value;
      const newPath = `/${arr.join("/")}`;
      router.push({ path: newPath });
    } else {
      const newPath = `/${model.value.join("/")}`;
      router.push({ path: newPath });
    }
  };
  return {
    model,
    updated: ref(false),
    status: ref(200)
  };
}
