import type { Ref, SetupContext } from 'vue';
import { addProp } from '../../composables/utils/useProps';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../attributes/useID';
import { waitAfterTransition } from '../utils/useDOM';
import { unrefElement } from '../utils/helpers';
import {
 ref,
 inject,
 computed,
 watch,
 nextTick,
} from '#imports';

export const CollapseProps = {
 horizontal: {
  type: Boolean,
 },
};

export interface ICollapseProps {
 horizontal?: boolean;
}

export interface ICollapseMethods {
 show: () => Promise<void>;
 hide: () => Promise<void>;
 toggle: () => Promise<void>;
}
// https://getbootstrap.jp/docs/5.0/components/collapse/
// https://github.com/twbs/bootstrap/blob/main/js/src/collapse.js
// 祖先コンポーネントで provideShowState してShow状態を制御

interface IProps extends ICollapseProps, IIDProps {}

export function useCollapse<P extends IProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
 elementRef: Ref<HTMLElement | undefined>,
) {
 // useItemsActive
 const active = inject<Ref<boolean> | undefined>('active.collapse', undefined);
 //
 if (active) {
  watch(active, (value) => {
   if (value) {
    show();
   }
   else {
    hide();
   }
  });
 }
 //
 const isShown = ref(active?.value || false);
 const height = ref(0);
 const width = ref(0);
 const collapse = ref(!isShown.value);
 const collapsing = ref(false);
 const isShow = ref(isShown.value);
 const { expose } = useEvent(props, elementRef, 'collapse');
 //
 const show = async () => {
  if (!elementRef.value) {
   return;
  }
  const element = unrefElement(elementRef);
  if (!element) {
   return;
  }
  context.emit('show.collapse');
  isShown.value = true;
  collapse.value = false;
  collapsing.value = true;
  isShow.value = false;
  await nextTick();
  height.value = element.scrollHeight;
  width.value = element.scrollWidth;
  await waitAfterTransition(elementRef, true);
  collapse.value = true;
  collapsing.value = false;
  isShow.value = true;
  context.emit('shown.collapse');
 };
 //
 const hide = async () => {
  if (!elementRef.value) {
   return;
  }
  const element = unrefElement(elementRef);
  if (!element) {
   return;
  }
  context.emit('hide.collapse'); // イベントを発生させる
  isShown.value = false;
  height.value = element.offsetHeight;
  width.value = element.offsetWidth;
  collapsing.value = true;
  await nextTick();
  collapse.value = false;
  isShow.value = true;
  await nextTick();
  height.value = element.scrollHeight;
  width.value = element.scrollWidth;
  await nextTick();
  height.value = 0;
  width.value = 0;
  await nextTick();
  await waitAfterTransition(elementRef, true);
  collapse.value = true;
  collapsing.value = false;
  isShow.value = false;
  context.emit('hidden.collapse');
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
 const method = expose<ICollapseMethods>({ show, hide, toggle });
 //
 return {
  class: computed(() => {
   return {
    'show': isShow.value,
    'collapse': collapse.value,
    'collapsing': collapsing.value,
    'collapse-horizontal': props.horizontal,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(
     !props.horizontal && collapsing.value,
     'height',
     height.value == 0 ? '0' : `${height.value}px`,
    ),
    ...addProp(
     props.horizontal && collapsing.value,
     'width',
     width.value == 0 ? '0' : `${width.value}px`,
    ),
   };
  }),
  method,
 };
}
