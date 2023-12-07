import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
export default defineComponent({
  name: "BsCollapseButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "button"
    },
    toggle: {
      type: String,
      default: "collapse"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props, elementRef);
    const current = {};
    return () => h(
      anchorButton.tag,
      hProps(current, anchorButton, toggle, block),
      context.slots
    );
  }
});
