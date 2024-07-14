import { defineComponent, h, ref, inject } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  useButton,
  ButtonProps
} from "../../../composables/html/useButton.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
export default defineComponent({
  name: "BsDropdownToggle",
  props: {
    ...BlockProps,
    ...ButtonProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "a"
    },
    toggle: {
      type: String,
      default: "dropdown"
    }
  },
  setup(props, context) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const Button = useButton(props);
    const toggle = useToggle(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      "button",
      hProps(current, toggle, Button, block),
      context.slots
    );
  }
});
