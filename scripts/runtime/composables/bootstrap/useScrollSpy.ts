import type { Ref, SetupContext } from 'vue';
import { useEventTarget } from '../utils/useEventTarget';
import type { IIDProps } from '../attributes/useID';
import { useEvent } from '../utils/useEvent';
import {
 unrefElement,
 useDebounceFn,
} from '../utils/helpers';
import { ref, computed } from '#imports';

export const ScrollSpyProps = {
 spy: {
  type: String,
 },
};
//
export interface IScrollSpyProps {
 spy?: string;
}

interface IProps extends IScrollSpyProps, IIDProps { }

//
export function useScrollSpy<P extends IProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
) {
 if (!props.spy) {
  return {};
 }
 //
 const items = ref<Array<string>>([]);
 const { exposeState, expose } = useEvent(props, elementRef, 'spy');
 //
 const { emit } = useEventTarget(props, elementRef);
 //
 const current = ref('');
 //
 const refresh = useDebounceFn(() => {
  if (items.value.length == 0 || !props.spy) {
   return;
  }
  // nextTick();
  // queryselector による選択ではTeleportされたアイテムを取得できない
  const selector = items.value.map(item => `#${item}[data-bv-spy-visible='true']`).join(',');
  const element = unrefElement(elementRef);
  const dom = element?.querySelector<HTMLElement>(selector);

  if (dom) {
   current.value = dom.id;
   emit('current', dom.id);
   context.emit('currentChanged', dom.id);
   // nextTick()
  }
  else {
   current.value = '';
  }
 }, 100);

 const registerItem = async (id: string) => {
  items.value.push(id);
 };
 //
 const method = expose({
  refresh,
  registerItem,
 });
 exposeState({
  spy: ref(props.spy),
 });
 //
 return {
  method,
  attr: computed(() => {
   return {
    'data-debug-spy-current': current.value,
   };
  }),
 };
}
