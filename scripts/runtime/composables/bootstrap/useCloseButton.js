import {
  useEventEmitter,
  EventEmitProps
} from "../utils/useEventEmitter.js";
export const CloseButtonProps = {
  ...EventEmitProps,
  dismiss: {
    type: String
  }
};
export function useCloseButton(props, elementRef) {
  if (!props.dismiss) {
    return {};
  }
  const dismissEmitter = useEventEmitter(props, "dismiss", props.dismiss || "", elementRef);
  const dismiss = () => {
    dismissEmitter();
  };
  return {
    method: {
      dismiss
    },
    event: {
      onClick: dismiss
    }
  };
}
