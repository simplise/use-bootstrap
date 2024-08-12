import { keys } from "lodash-es";
import { breakpointsBootstrapV5 } from "@vueuse/core";
export {
  normalizeClass
} from "vue";
export {
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
  remove
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
  useDark,
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
  isClient,
  breakpointsBootstrapV5,
  defaultWindow,
  defaultDocument
} from "@vueuse/core";
export { onClickOutsideFixed } from "./onClickOutsideFixed.js";
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
