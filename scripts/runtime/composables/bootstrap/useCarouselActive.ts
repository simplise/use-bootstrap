import type { Ref } from 'vue';
import { addProp, toNum } from '../../composables/utils/useProps';
import { type IIDProps, useIDRef } from '../attributes/useID';
import { useEvent } from '../utils/useEvent';
import { ref, inject, watch, computed, onMounted } from '#imports';

export const CarouselActiveProps = {
 active: {
  type: Boolean,
  default: false,
 },
 disabled: {
  type: Boolean,
  default: false,
 },
 interval: {
  type: [String, Number],
 },
};
//
export interface ICarouselActiveProps {
 active?: boolean;
 disabled?: boolean;
 interval?: string | number;
}

export interface IActiveState {
 active: Ref<boolean>;
}

export interface IActiveMethods {
 show: () => void;
 hide: () => void;
 toggle: () => void;
 // dismiss: () => void;
}

interface IProps extends ICarouselActiveProps, IIDProps { }

/// リダイレクト時にActiveが反映されない IDが異常設定される
export function useCarouselActive<P extends IProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
 eventSuffix: string,
) {
 //
 const current = inject<Ref<string> | undefined>(
  `current.${eventSuffix}`,
  undefined,
 );
 const interval = inject<Ref<number> | undefined>(
  `interval.${eventSuffix}`,
  undefined,
 );
 const eid = useIDRef(props, elementRef);
 const active = ref(current?.value == eid.value || props.active || false);
 const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
 //
 if (current) {
  if (active.value && eid.value) {
   current.value = eid.value;
  }
  watch(current, (next) => {
   if (next == eid.value) {
    // Active非表示の原因
    active.value = true;
    if (props.interval && interval) {
     interval.value = toNum(props.interval);
    }
   }
   else {
    active.value = false;
   }
  });
 }

 const show = () => {
  if (props.disabled) {
   return;
  }
  if (current && eid.value) {
   current.value = eid.value;
  }
  else {
   active.value = true;
  }
 };
 const hide = () => {
  if (current) {
   current.value = '';
  }
  else {
   active.value = false;
  }
 };
 const toggle = () => {
  if (active.value) {
   hide();
  }
  else {
   show();
  }
 };
 //
 onMounted(() => {

 });
 //
 const method = expose<IActiveMethods>({ show, hide, toggle });
 //
 exposeState<IActiveState>({ active });
 //
 return {
  class: computed(() => {
   return {
    active: active.value,
    disabled: props.disabled,
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(active.value, 'aria-current', 'page'),
    ...addProp(props.disabled, 'aria-disabled', 'true'),
   };
  }),
  method,
 };
}
