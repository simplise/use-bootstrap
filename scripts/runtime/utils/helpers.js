import { isArray, keys, startsWith, forOwn, isEmpty, set, pickBy, pick, has, camelCase, isString, isNumber, isBoolean } from "lodash-es";
import { breakpointsBootstrapV5 } from "@vueuse/core";
export {
  isArray,
  startsWith,
  forOwn,
  isEmpty,
  set,
  pickBy,
  pick,
  has,
  camelCase,
  isString,
  isNumber,
  isBoolean
};
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
