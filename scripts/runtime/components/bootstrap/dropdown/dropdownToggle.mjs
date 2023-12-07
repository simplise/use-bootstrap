import { defineComponent, h, ref, inject } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
export default defineComponent({
  name: "BsDropdownToggle",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
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
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, toggle, anchorButton, block),
      context.slots
    );
  }
});
