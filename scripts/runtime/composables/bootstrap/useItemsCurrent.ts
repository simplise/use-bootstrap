import type { Ref, SetupContext } from 'vue';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import { computed, ref, toRef, watch } from '#imports';

export const CurrentProps = {
 current: {
  type: String,
  default: '',
 },
 parent: {
  type: Boolean,
  default: true,
 },
};
//
export interface ICurrentProps {
 current?: string;
 parent?: boolean;
}

//
export interface ICurrentState {
 current: Ref<string>;
 parent: Ref<boolean | undefined>;
}

export interface IItemsCurrent extends ICurrentProps, IIDProps {}

//
export function useItemsCurrent<P extends IItemsCurrent>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
 eventSuffix: string,
) {
 //
 if (!props.parent) {
  // for nested spy
  return {};
 }
 const parent = toRef(props, 'parent');
 //
 const current = ref(props.current || '');
 //
 const { exposeState } = useEvent(props, elementRef, eventSuffix);
 //
 exposeState<ICurrentState>({ current, parent });
 //
 watch(current, () => {
  context.emit('currentChanged', current.value);
 });
 //
 watch(
  () => props.current,
  () => {
   if (props.current) {
    current.value = props.current;
   }
  },
 );
 //
 return {
  attr: computed(() => {
   return {
    'data-bv-current': current.value,
   };
  }),
 };
}
