import type { Ref } from 'vue';
import { useIDRef, type IIDProps } from '../attributes/useID';
import { useEventHandler } from './useEventHandler';
import { inject } from '#imports';

export const EventEmitProps = {
 target: {
  type: String,
 },
 href: {
  type: String,
 },
};

export interface IEventEmitProps {
 target?: string;
 href?: string;
}
//
interface IProps extends IEventEmitProps, IIDProps { }
// Targetで指定した複数のコンポーネントが登録したメソッド、または 祖先コンポーネントがProvideしたメソッドを実行します
export function useEventEmitter(
 props: IProps,
 event: string,
 eventSuffix: string,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const injectEvent = inject<
  ((payload?: unknown) => Promise<unknown>) | undefined
 >(`${event}.${eventSuffix}`, undefined);
 //
 const eid = useIDRef(props, elementRef);
 //
 return (payload?: unknown) => {
  if (props.target || props.href) {
   const { emit } = useEventHandler(
    props.target || props.href || '',
    'expose_',
   );
   emit(event, payload);
  }
  else {
   if (injectEvent) {
    injectEvent(payload);
   }
   if (eid.value) {
    const { emit } = useEventHandler(`#${eid.value}`, 'expose_');
    emit(event, payload);
   }
  }
 };
}
