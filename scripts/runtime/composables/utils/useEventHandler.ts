import type {
 EventBusListener,
 Fn,
 UseEventBusReturn,
} from '@vueuse/core';
import { useEventBus } from './helpers';
import { querySelectorToID } from './useDOM';

function toFn(fnArray: Fn[]) {
 return () => {
  fnArray.forEach(value => value);
 };
}

export function useEventHandler(
 selector: string,
 prefix = '',
): UseEventBusReturn<string, unknown> {
 function selectEventBus() {
  const list = querySelectorToID(selector);
  const eventBuses = list.map((value) => {
   return useEventBus<string>(`${prefix}${value}`);
  });
  return eventBuses;
 }

 const on = (lisner: EventBusListener<string>): Fn => {
  const eventBus = selectEventBus();
  const offs = eventBus.map((value) => {
   return value.on(lisner);
  });
  return toFn(offs);
 };

 const once = (lisner: EventBusListener<string>) => {
  const eventBus = selectEventBus();
  const offs = eventBus.map((value) => {
   return value.once(lisner);
  });
  return toFn(offs);
 };

 const emit = (event?: string) => {
  const eventBus = selectEventBus();
  eventBus.forEach((value) => {
   value.emit(event);
  });
 };

 const off = (lisner: EventBusListener<string>) => {
  const eventBus = selectEventBus();
  eventBus.forEach((value) => {
   value.off(lisner);
  });
 };

 const reset = () => {
  const eventBus = selectEventBus();
  eventBus.forEach((value) => {
   value.reset();
  });
 };

 return { on, once, emit, off, reset };
}
