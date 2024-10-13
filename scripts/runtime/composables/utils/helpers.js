import { keys } from "lodash-es";
import { breakpointsBootstrapV5 } from "@vueuse/core";
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
} from "lodash-es";
export {
  defu
} from "defu";
export {
  parseURL,
  stringifyParsedURL,
  withoutTrailingSlash
} from "ufo";
export {
  objectPick,
  isDef,
  useTimeoutFn,
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
  unrefElement,
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
} from "@vueuse/core";
export function startsWithBreakPoint(value) {
  return keys(breakpointsBootstrapV5).findIndex(
    (breakpoint) => value.startsWith(breakpoint)
  ) >= 0;
}
export function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}
