import { defineComponent, h, nextTick, ref } from "vue";
import { waitAfterTransition } from "../../../utils/useDOM.mjs";
import { useScrollbar } from "../../../utils/useScrollbar.mjs";
import { unrefElement } from "../../../utils/helpers.mjs";
import { exposeMethods } from "../../../utils/useProps.mjs";
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
      if (!props.scroll) {
        scrollBar?.hide();
      }
      isShown.value = true;
      await waitAfterTransition(elm, props.fade);
    };
    const hide = async () => {
      const elm = unrefElement(elementRef);
      isShown.value = false;
      await waitAfterTransition(elm, props.fade);
      scrollBar?.reset();
      await nextTick();
    };
    const current = {
      method: {
        show,
        hide
      }
    };
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
