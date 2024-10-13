import { hProps, exposeMethods, addProp } from "../../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h, ref, computed } from "#imports";
import { Icon } from "#components";
export default defineComponent({
  name: "IconBox",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "base"
    },
    color: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    exposeMethods(context, block);
    const current = {
      ref: elementRef,
      class: {
        "icon-box": true,
        "flex-shrink-0": true,
        "justify-content-center": true,
        "align-items-center": true,
        "d-inline-flex": true
      },
      style: computed(() => {
        return {
          ...addProp(props.color, "background-color", `var(--bs-${props.color})`),
          ...addProp(!props.textColor && props.color, "color", `var(--bs-contrast-${props.color})`),
          ...addProp(props.circle, "border-radius", `var(--bs-border-radius-pill)`),
          ...addProp(!props.circle, "border-radius", `var(--bs-border-radius-lg)`),
          ...addProp(props.size, "font-size", `var(--bs-font-size-${props.size})`),
          ...addProp(props.size, "width", `calc(var(--bs-font-size-${props.size}) * 3)`),
          ...addProp(props.size, "height", `calc(var(--bs-font-size-${props.size}) * 3)`)
        };
      })
    };
    return () => h(
      props.tag,
      hProps(block, current),
      [
        h(Icon, { name: props.icon })
      ]
    );
  }
});
