import { defineComponent, h, ref, inject } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import {
  useVisuallyHiddenContent,
  VisuallyHiddenContentProps
} from "../../../composables/bootstrap/useVisuallyHiddenContent.mjs";
export default defineComponent({
  name: "BsDropdownToggleSplit",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...ToggleProps,
    ...IDProps,
    ...VisuallyHiddenContentProps,
    tag: {
      type: String,
      default: "button"
    },
    toggle: {
      type: String,
      default: "dropdown"
    },
    split: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "Toggle Dropdown"
    }
  },
  setup(props) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const id = useID(props, "dropdown-toggle-split");
    const toggle = useToggle(props, elementRef);
    const visuallyHidden = useVisuallyHiddenContent(props);
    const current = {
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, id, block, toggle, anchorButton),
      hSlots(visuallyHidden.render)
    );
  }
});
