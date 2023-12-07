import { defineComponent, h, ref, computed } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, exposeMethods } from "../../../utils/useProps.mjs";
import { useFadeShow, FadeShowProps } from "../../../composables/bootstrap/useFadeShow.mjs";
export default defineComponent({
  name: "BsAlerts",
  props: {
    ...BlockProps,
    ...FadeShowProps,
    tag: {
      type: String,
      default: "div"
    },
    theme: {
      type: String,
      default: void 0
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const showFade = useFadeShow(props, context, elementRef, "alert", {
      enabled: props.dismissible
    });
    const current = {
      class: computed(() => {
        return {
          alert: true,
          [`alert-${props.theme}`]: props.theme,
          "alert-dismissible": props.dismissible
        };
      }),
      attr: {
        role: "alert"
      },
      ref: elementRef
    };
    exposeMethods(context, showFade);
    return () => h(props.tag, hProps(current, block, showFade), context.slots);
  }
});
