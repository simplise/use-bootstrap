import { hProps, addProp } from "../../composables/utils/useProps.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { defineComponent, h, ref } from "#imports";
import { Icon } from "#components";
export default defineComponent({
  name: "BsIcon",
  props: {
    ...BlockProps,
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    const elementRef = ref();
    const block = useBlock(props);
    const current = {
      attr: {
        name: props.icon
      },
      style: {
        "vertical-align": "-.125em",
        // https://icons.getbootstrap.com/
        ...addProp(props.color, "color", `var(--bs-${props.color})`)
      },
      ref: elementRef
    };
    if (props.icon === void 0) {
      return;
    }
    return () => h(
      Icon,
      hProps(current, block),
      void 0
    );
  }
});
