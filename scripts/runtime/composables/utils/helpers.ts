import { keys } from 'lodash-es';
import { breakpointsBootstrapV5  } from '@vueuse/core';

export {
 cloneDeep,
 isEqual,
 partialRight,
 every,
 some,
 memoize,
 keys,
 partial,
 overEvery,
 filter,
 orderBy,
 overSome,
 gt,
 eq,
 lt,
 startsWith,
 endsWith,
 isNaN,
 isNull,
 isUndefined,
 gte,
 lte,
 sum,
 max,
 mean,
 min,
 slice,
 groupBy,
 isArray,
 forOwn,
 isEmpty,
 get,
 set,
 pickBy,
 pick,
 has,
 camelCase,
 isString,
 isNumber,
 isBoolean,
 map,
 join,
 uniqueId,
 trimEnd,
 toString,
 trimStart,
 omit,
 toPlainObject,
 includes,
 isObject,
 remove,
 trim,
 snakeCase
} from 'lodash-es';

export {
 defu,
} from 'defu';

export {
 parseURL,
 stringifyParsedURL,
 withoutTrailingSlash,
} from 'ufo';

// https://github.com/vuejs/core/blob/9c304bfe7942a20264235865b4bb5f6e53fdee0d/packages/runtime-core/src/componentProps.ts

export {
 objectPick, // https://github.com/vueuse/vueuse/blob/9429395d4f86c47423eafa6682e79f8f1b7d6ceb/packages/shared/utils/index.ts
 isDef, // https://github.com/vueuse/vueuse/blob/9429395d4f86c47423eafa6682e79f8f1b7d6ceb/packages/shared/utils/is.ts
 useTimeoutFn,
 // Stoppable,
 templateRef,
 useCssVar,
 useCycleList,
 useScrollLock,
 useMagicKeys,
 whenever,
 useResizeObserver,
 useWindowSize,
 throttledWatch,
 useFocus,
 useTimeout,
 debouncedWatch,
 pausableWatch,
 throttleFilter,
 useElementHover,
 useEventListener,
 unrefElement, // NuxtLink サポートに必要
 onClickOutside,
 useIntersectionObserver,
 useIntervalFn,
 useElementVisibility,
 useSwipe,
 promiseTimeout,
 useBreakpoints,
 useToggle,
 useWindowScroll,
 useDebounceFn,
 watchDebounced,
 useMutationObserver,
 useMouse,
 useEventBus,
 watchOnce,
 useElementBounding, 
 useStorage,
 useVModel,
 toValue,
 tryOnMounted,
 tryOnScopeDispose,
 isClient,
 breakpointsBootstrapV5,
 defaultWindow,
 defaultDocument 
} from '@vueuse/core';

// export { onClickOutsideFixed } from './onClickOutsideFixed';

export function startsWithBreakPoint(value: string) {
 return (
  keys(breakpointsBootstrapV5).findIndex(breakpoint =>
   value.startsWith(breakpoint),
  ) >= 0
 );
}

export function delay(ms: number) {
 return new Promise<void>(function (resolve) {
  setTimeout(resolve, ms);
 });
}

// export function useDark() {
//  return vueUseDark({
//   selector: 'html',
//   attribute: 'data-bs-theme',
//   valueDark: 'dark',
//   valueLight: 'light',
//  });
// }
