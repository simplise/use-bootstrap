import { isArray, omit, toPlainObject, defu } from '../../utils/helpers';
import type { IViewStateSourceResult, IViewStateSourceProps } from '../useViewState';
import { useRoute, useRouter } from '#app';
import { ref } from '#imports';
//
export function useViewStateRouteParams(prop: IViewStateSourceProps): IViewStateSourceResult {
 //
 const route = useRoute();
 const router = useRouter();
 const model = ref<string | string[]>();
 const setModel = (newValue: string | string[]) => {
  if (model.value != newValue) {
   model.value = newValue;
  }
 };
 watch(() => route.params, () => {
  switch (prop.key) {
   case 'slug':
    if (isArray(route.params.slug)) {
     setModel(route.params.slug.join('/'));
    }
    setModel(route.params.slug);
    break;
   default:
    setModel(route.params[prop.key]);
  }
 });
 //
 watch(model, () => {
  sync();
 });
 //
 const sync = () => {
  if (model.value) {
   const query = defu({ [prop.key]: model.value }, route.params);
   const to = defu({ query }, { hash: route.hash });
   router.push(to);
  }
  else {
   const query = toPlainObject(route.params);
   omit(query, prop.key);
   const to = defu({ query }, { hash: route.hash });
   router.push(to);
  }
 };
 //
 //  const model = computed({
 //   // getter 関数
 //   get() {
 //    switch (prop.key) {
 //     case 'slug':
 //      if (isArray(route.params.slug)) {
 //       return route.params.slug.join('/');
 //      }
 //      return route.params.slug;
 //     default:
 //      return route.params[prop.key];
 //    }
 //   },
 //   // setter 関数
 //   set(newValue) {
 //    if (newValue) {
 //     const query = defu({ [prop.key]: newValue }, route.params);
 //     const to = defu({ query }, { hash: route.hash });
 //     router.push(to);
 //    }
 //    else {
 //     const query = toPlainObject(route.params);
 //     omit(query, prop.key);
 //     const to = defu({ query }, { hash: route.hash });
 //     router.push(to);
 //    }
 //   },
 //  });
 //
 return {
  model,
  updated: ref(false),
  status: ref(200),
 };
}
