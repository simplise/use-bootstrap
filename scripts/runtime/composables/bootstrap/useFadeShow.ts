import type { Ref, SetupContext } from 'vue';
import { addProp } from '../../composables/utils/useProps';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import { waitAfterTransition } from '../utils/useDOM';
import { computed, ref, nextTick } from '#imports';
//
export const FadeShowProps = {
 fade: {
  type: Boolean,
  default: true,
 },
 show: {
  type: Boolean,
 },
 dismissible: {
  type: Boolean,
 },
};

//
export interface IFadeShowProps {
 fade?: boolean;
 show: boolean;
 dismissible: boolean;
}

export interface IFadeShowMethods {
 show: () => Promise<void>;
 hide: () => Promise<void>;
 toggle: () => Promise<void>;
 dismiss: () => Promise<void>; // alert などコンポーネントで利用
}

export interface IFadeShowState {
 isShown: Ref<boolean>;
}

interface IFadeShowOptions {
 enabled?: boolean;
}
//
interface IProps extends IFadeShowProps, IIDProps {}
//
export function useFadeShow<P extends IProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
 eventSuffix: string,
 options: IFadeShowOptions = {},
) {
 //
 const { enabled = false } = options;
 if (!enabled) {
  return {};
 }
 const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);

 const isShown = ref(props.show || props.dismissible);
 const isTransitioning = ref(false);
 const isShow = ref(props.show || props.dismissible);

 //
 const show = async () => {
  //
  if (isShown.value || isTransitioning.value) {
   return;
  }
  //
  context.emit('show');
  //
  isShown.value = true;
  isTransitioning.value = true;
  await waitAfterTransition(elementRef, props.fade);
  //
  isShow.value = true;
  isTransitioning.value = false;
 };

 const hide = async () => {
  //
  if (!isShown.value || isTransitioning.value) {
   return;
  }
  //
  context.emit('hide');
  //
  isShow.value = false;
  isTransitioning.value = true;
  await waitAfterTransition(elementRef, props.fade);
  //
  isShown.value = false;
  isTransitioning.value = false;
  await nextTick();
 };
 //
 const toggle = async () => {
  if (isShown.value) {
   await hide();
  }
  else {
   await show();
  }
 };
 //
 //
 const method = expose<IFadeShowMethods>({ show, hide, toggle, dismiss: hide });
 //
 exposeState<IFadeShowState>({ isShown });
 //
 return {
  class: computed(() => {
   return {
    show: isShow.value,
    fade: props.fade,
   };
  }),
  style: computed(() => {
   return {
    display: isShown.value ? 'block' : 'none',
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(!isShown.value, 'aria-hidden', 'true'),
   };
  }),
  method,
 };
}
