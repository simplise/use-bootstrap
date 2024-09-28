import type { IViewStateSourceResult, IViewStateSourceProps } from '../useViewState';
import { useRoute, useRouter } from '#app';
import { ref } from '#imports';
//
export function useViewStateRoutePath(prop: IViewStateSourceProps): IViewStateSourceResult {
 //
 const route = useRoute();
 const router = useRouter();

 const model = ref<string | string[]>();
 const setModel = (newValue: string | string[]) => {
  if (model.value != newValue) {
   model.value = newValue;
  }
 };
 //
 watch(() => route.path, () => {
  const arr = route.path.split('/');
  arr.shift();
  const pathIndex = Number(prop.key);
  if (prop.key !== '' && !Number.isNaN(pathIndex)) {
   setModel(arr[pathIndex]);
  }
  else {
   setModel(arr);
  }
 },
 { immediate: true });
 //
 watch (model, () => {
  sync();
 });
 //
 const sync = () => {
  const pathIndex = Number(prop.key);
  if (prop.key !== '' && !Number.isNaN(pathIndex)) {
   const arr = route.path.split('/');
   arr.shift();
   arr[pathIndex] = model.value as string;
   const newPath = `/${arr.join('/')}`;
   router.push({ path: newPath });
  }
  else {
   const newPath = `/${(model.value as string[]).join('/')}`;
   router.push({ path: newPath });
  }
 };

 //
 // const model = computed({
 //  // getter 関数
 //  get() {
 //   const arr = route.path.split('/');
 //   arr.shift();
 //   const pathIndex = Number(prop.key);
 //   if (prop.key !== '' && !Number.isNaN(pathIndex)) {
 //    return arr[pathIndex];
 //   }
 //   else {
 //    return arr;
 //   }
 //  },
 //  // setter 関数
 //  set(newValue) {
 //   const pathIndex = Number(prop.key);
 //   if (prop.key !== '' && !Number.isNaN(pathIndex)) {
 //    const arr = route.path.split('/');
 //    arr.shift();
 //    arr[pathIndex] = newValue as string;
 //    const newPath = `/${arr.join('/')}`;
 //    router.push({ path: newPath });
 //   }
 //   else {
 //    const newPath = `/${(newValue as string[]).join('/')}`;
 //    router.push({ path: newPath });
 //   }
 //  },
 // });
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
 };
}
