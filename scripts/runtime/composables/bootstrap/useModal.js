import {
  useMagicKeys,
  useWindowSize,
  pausableWatch,
  throttleFilter,
  useFocus,
  onClickOutside,
  defaultDocument,
  promiseTimeout
} from "../utils/helpers.js";
import { addProp } from "../../composables/utils/useProps.js";
import { useEvent } from "../utils/useEvent.js";
import { useElement } from "../utils/useElement.js";
import { useScrollbar } from "../utils/useScrollbar.js";
import { useRTL } from "../utils/useRTL.js";
import { waitAfterTransition } from "../utils/useDOM.js";
import backdrop from "../../components/bootstrap/backdrop/backdrop.js";
import {
  computed,
  unref,
  ref,
  h,
  nextTick,
  onUnmounted
} from "#imports";
export const ModalProps = {
  fade: {
    type: Boolean,
    default: true
  },
  backdrop: {
    type: [Boolean, String],
    // static クリックしてもモーダルを閉じないfalse モーダル背景なし
    default: true
  },
  keyboard: {
    type: Boolean,
    // Escキーが押されたときにモーダルを閉じるかどうか
    default: true
  },
  focus: {
    type: Boolean,
    // モーダルにフォーカスを置くかどうか
    default: true
  },
  size: {
    type: String,
    default: ""
  }
};
export function useModal(props, context, elementRef, options = {}) {
  const { document = defaultDocument } = options;
  const backdropRef = ref();
  const { expose, exposeState } = useEvent(props, elementRef, "modal");
  const scrollBar = useScrollbar();
  const isRTL = useRTL();
  const isShown = ref(false);
  const isTransitioning = ref(false);
  const isShow = ref(false);
  const isShowBackdrop = ref(false);
  const isStatic = ref(false);
  const { focused } = useFocus(elementRef);
  const windowSize = useWindowSize();
  const windowSizeWatch = pausableWatch(
    windowSize.height,
    () => {
      adjustDialog();
    },
    {
      eventFilter: throttleFilter(500)
    }
  );
  windowSizeWatch.pause();
  const keys = useMagicKeys();
  const escape = keys["Escape"];
  const escapeKeyWatch = pausableWatch(escape, () => {
    hide();
    triggerBackdropTransition();
  });
  escapeKeyWatch.pause();
  onClickOutside(elementRef, async (_event) => {
    if (isShown.value) {
      if (props.backdrop != "static") {
        hide();
      } else {
        isStatic.value = false;
        await promiseTimeout(50);
        isStatic.value = true;
      }
    }
  });
  const show = async () => {
    if (isShown.value) {
      return;
    }
    context.emit("show");
    await nextTick();
    isShown.value = true;
    isTransitioning.value = true;
    adjustDialog();
    escapeKeyWatch.resume();
    windowSizeWatch.resume();
    isShowBackdrop.value = true;
    await nextTick();
    await backdropRef.value?.show();
    await waitAfterTransition(elementRef, props.fade);
    isShow.value = true;
    focused.value = props.focus || false;
    isTransitioning.value = false;
    await nextTick();
    context.emit("shown");
  };
  const hide = async () => {
    context.emit("hide");
    escapeKeyWatch.pause();
    windowSizeWatch.pause();
    isShow.value = false;
    isTransitioning.value = true;
    await waitAfterTransition(elementRef, props.fade);
    await backdropRef.value?.hide();
    isShowBackdrop.value = false;
    isShown.value = false;
    isTransitioning.value = false;
    await nextTick();
    context.emit("hidden");
  };
  const toggle = async () => {
    if (isShown.value) {
      await hide();
    } else {
      await show();
    }
  };
  function adjustDialog() {
    const element = unref(elementRef);
    if (!element || !document) {
      return;
    }
    const isModalOverflowing = element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = scrollBar?.getWidth() || 0;
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL.value ? "paddingLeft" : "paddingRight";
      element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL.value ? "paddingRight" : "paddingLeft";
      element.style[property] = `${scrollbarWidth}px`;
    }
  }
  async function triggerBackdropTransition() {
    const element = unref(elementRef);
    if (!element || !document) {
      return;
    }
    const isModalOverflowing = element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = element.style.overflowY;
    if (initialOverflowY === "hidden" || isStatic.value) {
      return;
    }
    if (!isModalOverflowing) {
      element.style.overflowY = "hidden";
    }
    isStatic.value = true;
    await waitAfterTransition(elementRef);
    isStatic.value = false;
    await waitAfterTransition(elementRef);
    element.style.overflowY = initialOverflowY;
    element.focus();
  }
  useElement(
    computed(() => {
      return {
        class: {
          "modal-open": isShown.value
        }
      };
    })
  );
  onUnmounted(() => {
    if (isShown.value) {
      scrollBar?.reset();
      isShown.value = false;
    }
  });
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ isShown });
  return {
    class: computed(() => {
      return {
        "modal": true,
        [`modal-${props.size}`]: props.size,
        "show": isShow.value,
        "fade": props.fade,
        "pe-none": true,
        "modal-static": isStatic.value
      };
    }),
    style: computed(() => {
      return {
        display: isShown.value ? "block" : "none"
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(isShown.value, "aria-modal", "true"),
        ...addProp(!isShown.value, "aria-hidden", "true"),
        ...addProp(isShown.value, "role", "dialog"),
        tabindex: -1
      };
    }),
    render: () => {
      if (isShowBackdrop.value) {
        return h(
          backdrop,
          {
            backdrop: "modal",
            fade: props.fade,
            ref: backdropRef
          },
          void 0
        );
      } else {
        return void 0;
      }
    },
    method
  };
}
