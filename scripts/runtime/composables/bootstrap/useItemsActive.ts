import type { Ref } from 'vue';
import { addProp } from '../../composables/utils/useProps';
import { type IIDProps, useIDRef } from '../../composables/attributes/useID';
import { useEvent } from '../utils/useEvent';
import { unrefElement } from '../utils/helpers';
import { ref, inject, watch, computed, onMounted, nextTick } from '#imports';
//
export const ActiveProps = {
 active: {
  type: Boolean,
  default: false,
 },
 disabled: {
  type: Boolean,
  default: false,
 },
};
//
export interface IActiveProps {
 active?: boolean;
 disabled?: boolean;
}

export interface IItemActiveProps extends IActiveProps, IIDProps {
 to?: string;
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
//
export function useActive<P extends IItemActiveProps>(
 props: P,
 eventSuffix: string,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const current = inject<Ref<string> | undefined>(
  `current.${eventSuffix}`,
  undefined,
 );
 const parent = inject<Ref<boolean | undefined> | undefined>(
  `parent.${eventSuffix}`,
  undefined,
 );

 const eid = useIDRef(props, elementRef);
 const active = ref((eid.value && current?.value == eid.value) || props.active || false);
 const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
 // e
 if (current && !props.to) {
  if (active.value && eid.value) {
   current.value = eid.value;
  }

  watch(current, async (next) => {
   if (next == eid.value) {
    active.value = true;
   }
   else {
    active.value = false;
   }
   // ↓ for NuxtLink bug
   const element = unrefElement(elementRef);
   if (!element) {
    return;
   }
   await nextTick();
   if (active.value) {
    if (!element.classList.contains('active')) {
     element.classList.add('active');
     await nextTick();
    }
   }
   else {
    if (element.classList.contains('active')) {
     element.classList.remove('active');
     await nextTick();
    }
   }
   // ↑ for NuxtLink bug
  });
 }
 //
 const show = () => {
  if (props.disabled) {
   return;
  }
  if (current && parent && parent.value && eid.value) {
   current.value = eid.value;
  }
  else {
   active.value = true;
  }
 };
 const hide = () => {
  if (current && parent && parent.value) {
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
  //
  if (active.value && eid.value && current) {
   current.value = eid.value;
  }
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
