import { defineComponent, h, computed, ref, inject } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
export default defineComponent({
  name: "BsAccordionButton",
  props: {
    ...BlockProps,
    ...ToggleProps,
    ...IDProps,
    ...AnchorButtonProps,
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
    const id = useID(props, "accordion-button");
    const toggle = useToggle(props, elementRef);
    const active = inject("active.collapse", ref(false));
    const current = {
      class: computed(() => {
        return {
          "accordion-button": true,
          "collapsed": active && !active?.value
        };
      }),
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, id, anchorButton, block, toggle),
      context.slots
    );
  }
});
