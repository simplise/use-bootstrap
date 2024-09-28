import type { Ref, SetupContext } from 'vue';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import {
 computed,
 ref,
 watch,
 provide,
} from '#imports';
import { useRoute } from '#app';
//
export const DropdownProps = {
 placement: {
  type: String,
  default: 'dropdown',
 },
};
//
export interface IDropdownProps {
 placement: string;
}
//
export interface IDropdownMethods {
 show: () => Promise<void>;
 hide: () => Promise<void>;
 toggle: (source: HTMLElement) => Promise<boolean>;
}
//
export interface IDropdownState {
 active: Ref<boolean>;
}

interface IProps extends IDropdownProps, IIDProps {}
//
export function useDropdown<P extends IProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const { expose, exposeState, emit } = useEvent(props, elementRef, 'dropdown');
 const active = ref(false);
 const buttonID = ref<string>();
 const placement = ref(props.placement);
 const toggleRef = ref<HTMLElement | undefined>();
 const hasMega = ref(false);
 provide('hasMega', hasMega);
 //
 const show = async () => {
  //
  if (active.value) {
   return;
  }
  //
  emit(context, 'show');
  //
  active.value = true;
 };
 //
 const hide = async () => {
  if (!active.value) {
   return;
  }
  //
  emit(context, 'hide');
  //
  active.value = false;
 };
 //
 const toggle = async () => {
  if (active.value) {
   await hide();
  }
  else {
   await show();
  }
  return active.value;
 };
 //
 const route = useRoute();
 watch(
  () => route.fullPath,
  () => {
   hide();
  },
 );
 //
 const method = expose<IDropdownMethods>({ show, hide, toggle });
 //
 exposeState<IDropdownState>({ active, buttonID, placement, toggleRef });
 //
 const cls: Record<string, boolean> = {};
 if (props.placement != 'dropdown') {
  cls[props.placement] = true;
 }
 //
 return {
  class: computed(() => {
   return {
    'position-static': hasMega.value,
    ...cls,
   };
  }),
  attr: computed(() => {
   return {
    'data-bv-active': active.value,
   };
  }),
  method,
 };
}
