import type { Ref } from 'vue';
import {
 useEventEmitter,
 EventEmitProps,
 type IEventEmitProps,
} from '../utils/useEventEmitter';
import { useIDRef, type IIDProps } from '../../composables/attributes/useID';
import { isPropUndefined, toArray } from '../../composables/utils/useProps';
import type { IElementProps } from '../../composables/base/useInline';
import { computed, inject, onMounted } from '#imports';

export const ToggleProps = {
 toggle: {
  type: String,
 },
 active: {
  type: Boolean,
 },
 split: {
  type: Boolean,
 },
 ...EventEmitProps,
};

export interface IToggleProps extends IEventEmitProps, IElementProps {
 toggle?: string;
 active?: boolean;
 split?: boolean;
}
//
interface IProps extends IToggleProps, IIDProps { }
//
export function useToggle<P extends IProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 if (isPropUndefined(props.toggle)) {
  return {};
 }
 const toggles = toArray(props.toggle);
 const eid = useIDRef(props, elementRef);
 const emitters = toggles.map((toggle) => {
  return useEventEmitter(props, 'toggle', toggle || '', elementRef);
 });
 //
 const toggleEmitter = () => emitters.forEach((emitter) => {
  return emitter();
 });
 //
 toggles.forEach((toggle) => {
  const buttonID = inject<Ref<string> | undefined>(
   `buttonID.${toggle}`,
   undefined,
  );
  onMounted(() => {
   if (buttonID && eid.value) {
    buttonID.value = eid.value;
   }
  });
 });
 //
 const toggle = async () => {
  await toggleEmitter();
 };
 //
 return {
  class: computed(() => {
   return {
    'dropdown-toggle': toggles.includes('dropdown'),
    'dropdown-toggle-split': props.split,
   };
  }),
  method: {
   toggle,
  },
  event: {
   onClick: toggle,
  },
 };
}
