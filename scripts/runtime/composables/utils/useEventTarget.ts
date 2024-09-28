import type { Ref } from 'vue';
import type { UseEventBusReturn } from '@vueuse/core';
import { type IIDProps, useIDRef } from '../attributes/useID';
import { useEventBus } from './helpers';
import { computed } from '#imports';

// 指定したIDのコンポーネントメソッドを実行したり、イベントに対応できるようにします
export function useEventTarget(props: IIDProps, elementRef: Ref<HTMLElement | undefined>) {
 //
 const eid = useIDRef(props, elementRef);
 // コンポーネント内のメソッドを外部からコールする際に利用するイベントバス
 const exposeEventBus: Ref<UseEventBusReturn<string, unknown>> = computed(() => useEventBus<string>(`expose_${eid.value}`));
 // コンポーネント内のイベントを発火します
 function emit(event: string, payload?: unknown) {
 //
  exposeEventBus.value.emit(event, payload);
 }
 //
 return {
  emit,
 };
}
