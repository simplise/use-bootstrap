import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, exposeMethods, addProp } from "../../../utils/useProps.js";
import { useFadeShow, FadeShowProps } from "../../../composables/bootstrap/useFadeShow.js";
import { defineComponent, h, ref, computed } from "#imports";
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
    },
    colorGenerate: {
      type: Boolean
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
          "alert": true,
          [`alert-${props.theme}`]: props.theme,
          "alert-dismissible": props.dismissible
        };
      }),
      style: computed(() => {
        return {
          ...addProp(props.colorGenerate, "--bs-alert-bg", `var(--bs-${props.theme})`),
          ...addProp(props.colorGenerate, "--bs-alert-color", `var(--bs-active-${props.theme})`),
          ...addProp(props.colorGenerate, "--bs-alert-border-color", `var(--bs-active-${props.theme})`),
          ...addProp(props.colorGenerate, "--bs-alert-link-color", `var(--bs-active-${props.theme})`)
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
