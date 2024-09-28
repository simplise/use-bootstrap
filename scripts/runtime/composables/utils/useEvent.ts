import type { UseEventBusReturn } from '@vueuse/core';
import type { SetupContext } from 'vue';
import { type IIDProps, useIDRef } from '../attributes/useID';
import { forOwn, useEventBus } from './helpers';
import { provide, type Ref, computed, onMounted } from '#imports';

export function useEvent(
 props: IIDProps,
 elementRef: Ref<HTMLElement | undefined>,
 eventSuffix: string,
) {
 const eid = useIDRef(props, elementRef);
 // コンポーネント内のメソッドを外部からコールする際に利用するイベントバス
 const exposeEventBus: Ref<UseEventBusReturn<string, unknown>> = computed(() =>
  useEventBus<string>(`expose_${eid.value}`),
 );
 // コンポーネント内のイベントに対し外部メソッドをコールするイベントバス
 const emitEventBus: Ref<UseEventBusReturn<string, unknown>> = computed(() =>
  useEventBus<string>(`emit_${eid.value}`),
 );
 // コンポーネント内のメソッドを定義します
 function expose<T>(
  exposed: Record<string, (...args: unknown[]) => unknown> & T,
 ) {
  //
  forOwn(exposed, (value: () => unknown, key) => {
   provide(`${key}.${eventSuffix}`, value);
  });
  onMounted(() => {
   exposeEventBus.value.on((event: string, ...args: unknown[]) => {
    return exposed[event] ? exposed[event](args) : undefined;
   });
  });
  //

  //
  return exposed;
 }
 // コンポーネント内のイベントを発火します
 function emit(
  context: SetupContext<Record<string, unknown>>,
  event: string,
  payload?: unknown,
 ) {
  //
  context.emit(event, payload);
  //
  emitEventBus.value.emit(event, payload);
  //
 }
 // 公開するコンポーネント内のRef値を定義します
 function exposeState<T>(state: Record<string, Ref<unknown>> & T) {
  //
  forOwn(state, (value: Ref<unknown>, key) => {
   provide(`${key}.${eventSuffix}`, value);
  });
  //
  onMounted(() => {
   exposeEventBus.value.on((event: string, payload: unknown) => {
    if (state[event] && payload) {
     state[event].value = payload;
    }
   });
  });
 }

 return {
  emit,
  expose,
  exposeState,
 };
}
