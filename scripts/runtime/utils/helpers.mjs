import { isArray, keys, uniqueId, startsWith, forOwn, isEmpty, set, pickBy, pick, has, camelCase, isString, isNumber, isBoolean } from "lodash-es";
import { breakpointsBootstrapV5 } from "@vueuse/core";
export {
  uniqueId,
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
  breakpointsBootstrapV5,
  defaultWindow,
  defaultDocument
} from "@vueuse/core";
export { onClickOutsideFixed } from "./onClickOutsideFixed.mjs";
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
