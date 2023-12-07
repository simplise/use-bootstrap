import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
export default defineComponent({
  name: "BsModalToggleButton",
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
      default: "modal"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props, elementRef);
    const current = {
      attr: {
        type: props.type
      },
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, anchorButton, block, toggle),
      context.slots
    );
  }
});
