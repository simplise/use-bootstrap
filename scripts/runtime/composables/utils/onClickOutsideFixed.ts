import type {
 MaybeElementRef,
 ConfigurableWindow,
} from '@vueuse/core';
import {
 unrefElement,
 useEventListener,
 defaultWindow,
} from './helpers';
import { ref } from '#imports';
//
export interface OnClickOutsideOptions extends ConfigurableWindow {
 //
 ignore?: MaybeElementRef[];
}
//
export function onClickOutsideFixed(
 target: MaybeElementRef,
 handler: (evt: PointerEvent) => void,
 options: OnClickOutsideOptions = {},
) {
 const { window = defaultWindow, ignore } = options;

 if (!window) return;

 const shouldListen = ref(true);

 const listener = (event: PointerEvent) => {
  const el = unrefElement(target);
  const composedPath = event.composedPath();

  if (
   !el
   || el === event.target
   || composedPath.includes(el)
   || !shouldListen.value
  )
   return;

  if (ignore && ignore.length > 0) {
   if (
    ignore.some((target) => {
     const el = unrefElement(target);
     return el && (event.target === el || composedPath.includes(el));
    })
   )
    return;
  }
  const rect = el.getBoundingClientRect();
  if (
   event.x > rect.left
   && event.x < rect.right
   && event.y > rect.top
   && event.y < rect.bottom
  ) {
   return;
  }

  handler(event);
 };

 const cleanup = [
  useEventListener(window, 'click', listener, {
   passive: true,
   capture: true,
  }),
  useEventListener(
   window,
   'pointerdown',
   (e) => {
    const el = unrefElement(target);
    shouldListen.value = !!el && !e.composedPath().includes(el);
   },
   { passive: true },
  ),
 ];

 const stop = () => cleanup.forEach(fn => fn());

 return stop;
}
