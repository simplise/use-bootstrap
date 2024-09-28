import type { Ref } from 'vue';
import {
 useEventEmitter,
 EventEmitProps,
 type IEventEmitProps,
} from '../utils/useEventEmitter';
//
export const CloseButtonProps = {
 ...EventEmitProps,
 dismiss: {
  type: String,
 },
};
//
export interface ICloseButtonProps extends IEventEmitProps {
 dismiss?: string;
}
//
export function useCloseButton<P extends ICloseButtonProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 if (!props.dismiss) {
  return {};
 }
 const dismissEmitter = useEventEmitter(props, 'dismiss', props.dismiss || '', elementRef);
 //
 const dismiss = () => {
  dismissEmitter();
 };
 //
 return {
  method: {
   dismiss,
  },
  event: {
   onClick: dismiss,
  },
 };
}
