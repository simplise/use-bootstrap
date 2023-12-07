import { computed, unref, ref, h, nextTick } from "vue";
import {
  useMagicKeys,
  useWindowSize,
  pausableWatch,
  throttleFilter,
  useFocus,
  onClickOutside
} from "../../utils/helpers.mjs";
import { addProp } from "../../utils/useProps.mjs";
import { useEvent } from "../../utils/useEvent.mjs";
import { useElement } from "../../utils/useElement.mjs";
import { useScrollbar } from "../../utils/useScrollbar.mjs";
import { useSettings } from "../../utils/useSettings.mjs";
import { waitAfterTransition } from "../../utils/useDOM.mjs";
import backdrop from "../../components/bootstrap/backdrop/backdrop.mjs";
import { defaultDocument, promiseTimeout } from "@vueuse/core";
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
  }
};
export function useModal(props, context, elementRef, options = {}) {
  const { document = defaultDocument } = options;
  const backdropRef = ref();
  const { expose, exposeState } = useEvent(props, elementRef, "modal");
  const scrollBar = useScrollbar();
  const { isRTL } = useSettings();
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
  onClickOutside(elementRef, async () => {
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
    context.emit("show.modal");
    isShown.value = true;
    isTransitioning.value = true;
    adjustDialog();
    escapeKeyWatch.resume();
    windowSizeWatch.resume();
    isShowBackdrop.value = true;
    await nextTick();
    await backdropRef.value?.show();
    isShow.value = true;
    focused.value = props.focus || false;
    isTransitioning.value = false;
  };
  const hide = async () => {
    context.emit("hide.modal");
    escapeKeyWatch.pause;
    windowSizeWatch.pause();
    isShow.value = false;
    isTransitioning.value = true;
    await waitAfterTransition(elementRef, props.fade);
    await backdropRef.value?.hide();
    isShowBackdrop.value = false;
    isShown.value = false;
    isTransitioning.value = false;
    await nextTick();
  };
  const toggle = async () => {
    isShown.value ? await hide() : await show();
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
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
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
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ isShown });
  return {
    class: computed(() => {
      return {
        modal: true,
        show: isShow.value,
        fade: props.fade,
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
