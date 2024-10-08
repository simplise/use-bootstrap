import type { Ref, SetupContext, PropType } from 'vue';
import {
 useMagicKeys,
 pausableWatch,
 useFocus,
 onClickOutside,
 unrefElement,
 useBreakpoints,
 breakpointsBootstrapV5,
} from '../utils/helpers';
import { addProp } from '../../composables/utils/useProps';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import { waitAfterTransition } from '../utils/useDOM';
import backdrop, { type IBackdrop } from '../../components/bootstrap/backdrop/backdrop';
import { computed, ref, h, nextTick, onMounted, watch } from '#imports';
import { useRoute } from '#app';
//
export const OffcanvasProps = {
 type: {
  type: String as PropType<'lg' | 'sm' | 'md' | 'xl' | 'xxl'>, // lg
 },
 placement: {
  type: String, // start end top bottom
  default: 'end',
 },
 fade: {
  type: Boolean,
  default: true,
 },
 show: {
  type: Boolean,
  default: false,
 },
 backdrop: {
  type: [Boolean, String], // static クリックしてもモーダルを閉じないfalse モーダル背景なし
  default: true,
 },
 keyboard: {
  type: Boolean, // Escキーが押されたときにモーダルを閉じるかどうか
  default: true,
 },
 focus: {
  type: Boolean, // モーダルにフォーカスを置くかどうか
  default: true,
 },
 scroll: {
  type: Boolean, //
  default: false,
 },
 dark: {
  type: Boolean, //
  default: false,
 },
};
//
export interface IOffcanvasProps {
 type?: 'lg' | 'sm' | 'md' | 'xl' | 'xxl';
 placement?: string;
 fade?: boolean;
 show?: boolean;
 backdrop?: boolean | string;
 keyboard?: boolean;
 focus?: boolean;
 scroll?: boolean;
 dark?: boolean;
}
//
export interface IOffcanvasMethods {
 show: () => Promise<void>;
 hide: () => Promise<void>;
 toggle: () => Promise<void>;
 // dismiss: () => Promise<void>;
}
//
interface IProps extends IOffcanvasProps, IIDProps { }
//
export function useOffcanvas<P extends IProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //

 const backdropRef = ref<IBackdrop>();
 const { expose, exposeState } = useEvent(props, elementRef, 'offcanvas');
 const isShown = ref(false);
 const isTransitioning = ref(false);
 const isShow = ref(false);
 const isShowBackdrop = ref(false);
 const { focused } = useFocus(elementRef);
 const keys = useMagicKeys();
 const escape = keys['Escape'];
 const escapeKeyWatch = pausableWatch(escape, () => {
  hide();
 });
 escapeKeyWatch.pause();
 //
 if (props.backdrop && props.backdrop != 'static') {
  onClickOutside(elementRef, (_event) => {
   if (isShown.value) {
    hide();
   }
  });
 }
 //

 const largerThanType = ref(false);
 if (props.type) {
  const breakpoints = useBreakpoints(breakpointsBootstrapV5);
  onMounted(() => {
   if (props.type) {
    const gr = breakpoints.greater(props.type);
    largerThanType.value = gr.value;
    watch(gr, () => {
     largerThanType.value = gr.value;
    });
   }
  });
 }
 const route = useRoute();
 watch(() => route.path, async () => {
  await hide();
 });
 //
 const show = async () => {
  //
  if (isShown.value) {
   return;
  }
  //
  context.emit('show.offcanvas');
  //
  isShown.value = true;
  isTransitioning.value = true;
  escapeKeyWatch.resume(); // toggleEscapeEventListener
  //
  isShowBackdrop.value = true;
  await nextTick(); // backdropRef描画に必要
  await backdropRef.value?.show();
  //
  await waitAfterTransition(backdropRef, props.fade);
  //
  isShow.value = true;
  focused.value = props.focus || false;
  isTransitioning.value = false;
  await waitAfterTransition(elementRef, props.fade);
  await nextTick();
 };
 //
 const hide = async () => {
  //
  context.emit('hide.offcanvas');
  const element = unrefElement(elementRef);
  if (!element) {
   return;
  }
  //
  escapeKeyWatch.pause(); // toggleEscapeEventListener

  element.blur();
  //
  isShow.value = false;
  isTransitioning.value = true;

  await waitAfterTransition(elementRef, props.fade);
  //
  await backdropRef.value?.hide();
  isShowBackdrop.value = false;
  isShown.value = false;
  isTransitioning.value = false;
 };
 //
 const toggle = () => (isShown.value ? hide() : show());

 //
 const method = expose<IOffcanvasMethods>({
  show,
  hide,
  toggle,
  dismiss: hide, // Closeボタン
 });
 //
 exposeState({ isShow, isShown });
 //
 return {
  class: computed(() => {
   return {
    offcanvas: !props.type,
    [`offcanvas-${props.type}`]: props.type,
    [`offcanvas-${props.placement}`]: true,
    [`text-bg-dark`]: props.dark,
    show: isShow.value,
    // 'pe-none': true,
   };
  }),
  style: computed(() => {
   return {
    visibility: (props.show || isShown.value || largerThanType.value) ? 'visible' : 'hidden',
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(isShown.value, 'aria-modal', 'true'),
    ...addProp(isShown.value, 'role', 'dialog'),
    tabindex: -1,
   };
  }),
  render: () => {
   if (isShowBackdrop.value && props.backdrop) {
    return h(
     backdrop,
     {
      backdrop: 'offcanvas',
      fade: props.fade,
      scroll: props.scroll,
      ref: backdropRef,
     },
     undefined,
    );
   }
   else {
    return undefined;
   }
  },
  method,
 };
}
