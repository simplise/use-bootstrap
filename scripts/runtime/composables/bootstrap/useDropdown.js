import { useEvent } from "../utils/useEvent.js";
import {
  computed,
  ref,
  watch,
  provide
} from "#imports";
import { useRoute } from "#app";
export const DropdownProps = {
  placement: {
    type: String,
    default: "dropdown"
  }
};
export function useDropdown(props, context, elementRef) {
  const { expose, exposeState, emit } = useEvent(props, elementRef, "dropdown");
  const active = ref(false);
  const buttonID = ref();
  const placement = ref(props.placement);
  const toggleRef = ref();
  const hasMega = ref(false);
  provide("hasMega", hasMega);
  const show = async () => {
    if (active.value) {
      return;
    }
    emit(context, "show");
    active.value = true;
  };
  const hide = async () => {
    if (!active.value) {
      return;
    }
    emit(context, "hide");
    active.value = false;
  };
  const toggle = async () => {
    if (active.value) {
      await hide();
    } else {
      await show();
    }
    return active.value;
  };
  const route = useRoute();
  watch(
    () => route.fullPath,
    () => {
      hide();
    }
  );
  const method = expose({ show, hide, toggle });
  exposeState({ active, buttonID, placement, toggleRef });
  const cls = {};
  if (props.placement != "dropdown") {
    cls[props.placement] = true;
  }
  return {
    class: computed(() => {
      return {
        "position-static": hasMega.value,
        ...cls
      };
    }),
    attr: computed(() => {
      return {
        "data-bv-active": active.value
      };
    }),
    method
  };
}
