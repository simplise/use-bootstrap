import type { Ref } from 'vue';
import { EventEmitProps, type IEventEmitProps } from '../utils/useEventEmitter';
import { toArray } from '../../composables/utils/useProps';
import type { IElementProps } from '../../composables/base/useInline';
import { useEventHandler } from '../utils/useEventHandler';
import { type IIDProps, useIDRef } from '../../composables/attributes/useID';
import { ref, inject } from '#imports';

export const TabActiveProps = {
 tab: {
  type: String,
 },
 ...EventEmitProps,
};

export interface IToggleProps extends IEventEmitProps, IElementProps {
 tab?: string;
}

interface ITabActive extends IToggleProps, IIDProps {

}

export function useTabActive<P extends ITabActive>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const tabs = toArray(props.tab);
 //
 const current = inject('current.nav', ref(''));
 //
 const eid = useIDRef(props, elementRef);
 //
 const toggleEmitter = () => {
  tabs.map(() => {
   const { emit } = useEventHandler(props.tab || '', 'expose_');
   emit('show');
  });
  //
  if (eid.value) {
   current.value = eid.value;
  }
 };
 //
 const tabActive = async () => {
  await toggleEmitter();
 };
 //
 return {
  method: {
   tabActive,
  },
  event: {
   onClick: tabActive,
  },
 };
}
