import { addProp } from "../../composables/utils/useProps.js";
import { useEvent } from "../utils/useEvent.js";
import { waitAfterTransition } from "../utils/useDOM.js";
import { computed, ref, nextTick } from "#imports";
export const FadeShowProps = {
  fade: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean
  },
  dismissible: {
    type: Boolean
  }
};
export function useFadeShow(props, context, elementRef, eventSuffix, options = {}) {
  const { enabled = false } = options;
  if (!enabled) {
    return {};
  }
  const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
  const isShown = ref(props.show || props.dismissible);
  const isTransitioning = ref(false);
  const isShow = ref(props.show || props.dismissible);
  const show = async () => {
    if (isShown.value || isTransitioning.value) {
      return;
    }
    context.emit("show");
    isShown.value = true;
    isTransitioning.value = true;
    await waitAfterTransition(elementRef, props.fade);
    isShow.value = true;
    isTransitioning.value = false;
  };
  const hide = async () => {
    if (!isShown.value || isTransitioning.value) {
      return;
    }
    context.emit("hide");
    isShow.value = false;
    isTransitioning.value = true;
    await waitAfterTransition(elementRef, props.fade);
    isShown.value = false;
    isTransitioning.value = false;
    await nextTick();
  };
  const toggle = async () => {
    if (isShown.value) {
      await hide();
    } else {
      await show();
    }
  };
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ isShown });
  return {
    class: computed(() => {
      return {
        show: isShow.value,
        fade: props.fade
      };
    }),
    style: computed(() => {
      return {
        display: isShown.value ? "block" : "none"
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(!isShown.value, "aria-hidden", "true")
      };
    }),
    method
  };
}
