import { waitAfterTransition } from "../../../composables/utils/useDOM.js";
import { useScrollbar } from "../../../composables/utils/useScrollbar.js";
import { unrefElement } from "../../../composables/utils/helpers.js";
import { exposeMethods } from "../../../composables/utils/useProps.js";
import { defineComponent, h, nextTick, ref, onUnmounted } from "#imports";
export default defineComponent({
  name: "BsBackdrop",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    fade: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: String,
      default: void 0
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const isShown = ref(false);
    const scrollBar = useScrollbar();
    const elementRef = ref();
    const show = async () => {
      const elm = unrefElement(elementRef);
      if (!props.scroll && !isShown.value) {
        scrollBar?.hide();
      }
      isShown.value = true;
      await waitAfterTransition(elm, props.fade);
    };
    const hide = async () => {
      const elm = unrefElement(elementRef);
      if (isShown.value) {
        await waitAfterTransition(elm, props.fade);
        scrollBar?.reset();
        await nextTick();
      }
      isShown.value = false;
    };
    const current = {
      method: {
        show,
        hide
      }
    };
    onUnmounted(() => {
      if (isShown.value) {
        scrollBar?.reset();
        isShown.value = false;
      }
    });
    exposeMethods(context, current);
    return () => h(
      props.tag,
      {
        class: {
          [`${props.backdrop}-backdrop`]: true,
          fade: props.fade,
          show: isShown.value
        },
        ref: elementRef
      },
      context.slots
    );
  }
});
