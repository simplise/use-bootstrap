import { useIDRef } from "../attributes/useID.js";
import { useEventHandler } from "./useEventHandler.js";
import { inject } from "#imports";
export const EventEmitProps = {
  target: {
    type: String
  },
  href: {
    type: String
  }
};
export function useEventEmitter(props, event, eventSuffix, elementRef) {
  const injectEvent = inject(`${event}.${eventSuffix}`, void 0);
  const eid = useIDRef(props, elementRef);
  return (payload) => {
    if (props.target || props.href) {
      const { emit } = useEventHandler(
        props.target || props.href || "",
        "expose_"
      );
      emit(event, payload);
    } else {
      if (injectEvent) {
        injectEvent(payload);
      }
      if (eid.value) {
        const { emit } = useEventHandler(`#${eid.value}`, "expose_");
        emit(event, payload);
      }
    }
  };
}
