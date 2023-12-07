import { computed, inject, onMounted } from "vue";
import {
  useEventEmitter,
  EventEmitProps
} from "../../utils/useEventEmitter.mjs";
import { useIDRef } from "../../composables/attributes/useID.mjs";
import { isPropUndefined, toArray } from "../../utils/useProps.mjs";
export const ToggleProps = {
  toggle: {
    type: String
  },
  active: {
    type: Boolean
  },
  split: {
    type: Boolean
  },
  ...EventEmitProps
};
export function useToggle(props, elementRef) {
  if (isPropUndefined(props.toggle)) {
    return {};
  }
  const toggles = toArray(props.toggle);
  const eid = useIDRef(props, elementRef);
  const emitters = toggles.map((toggle2) => {
    return useEventEmitter(props, "toggle", toggle2 || "", elementRef);
  });
  const toggleEmitter = () => emitters.forEach((emitter) => {
    return emitter();
  });
  toggles.forEach((toggle2) => {
    const buttonID = inject(
      `buttonID.${toggle2}`,
      void 0
    );
    onMounted(() => {
      if (buttonID && eid.value) {
        buttonID.value = eid.value;
      }
    });
  });
  const toggle = async () => {
    await toggleEmitter();
  };
  return {
    class: computed(() => {
      return {
        "dropdown-toggle": toggles.includes("dropdown"),
        "dropdown-toggle-split": props.split
      };
    }),
    method: {
      toggle
    },
    event: {
      onClick: toggle
    }
  };
}
