import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, exposeMethods, addProp } from "../../../composables/utils/useProps.js";
import { useFadeShow, FadeShowProps } from "../../../composables/bootstrap/useFadeShow.js";
import { defineComponent, h, ref, computed } from "#imports";
import { includesPresets } from "../../../composables/utils/usePresets.js";
export default defineComponent({
  name: "BsAlerts",
  props: {
    ...BlockProps,
    ...FadeShowProps,
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String,
      default: "primary"
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
    const colorIncludePreset = computed(() => includesPresets("alert-color", props.color));
    const current = {
      class: computed(() => {
        return {
          "alert": true,
          [`alert-${props.color}`]: props.color && colorIncludePreset.value,
          "alert-dismissible": props.dismissible
        };
      }),
      style: computed(() => {
        return {
          ...addProp(props.color && !colorIncludePreset.value, "--bs-alert-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !colorIncludePreset.value, "--bs-alert-color", `var(--bs-active-${props.color})`),
          ...addProp(props.color && !colorIncludePreset.value, "--bs-alert-border-color", `var(--bs-active-${props.color})`),
          ...addProp(props.color && !colorIncludePreset.value, "--bs-alert-link-color", `var(--bs-active-${props.color})`)
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
