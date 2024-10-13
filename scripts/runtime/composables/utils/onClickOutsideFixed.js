import {
  unrefElement,
  useEventListener,
  defaultWindow
} from "./helpers.js";
import { ref } from "#imports";
export function onClickOutsideFixed(target, handler, options = {}) {
  const { window = defaultWindow, ignore } = options;
  if (!window) return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    const rect = el.getBoundingClientRect();
    if (event.x > rect.left && event.x < rect.right && event.y > rect.top && event.y < rect.bottom) {
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, {
      passive: true,
      capture: true
    }),
    useEventListener(
      window,
      "pointerdown",
      (e) => {
        const el = unrefElement(target);
        shouldListen.value = !!el && !e.composedPath().includes(el);
      },
      { passive: true }
    )
  ];
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
