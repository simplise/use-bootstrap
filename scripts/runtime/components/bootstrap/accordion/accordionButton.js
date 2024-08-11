import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import {
  useButton,
  ButtonProps
} from "../../../composables/html/useButton.js";
import { defineComponent, h, computed, ref, inject } from "#imports";
export default defineComponent({
  name: "BsAccordionButton",
  props: {
    ...BlockProps,
    ...ToggleProps,
    ...IDProps,
    ...ButtonProps,
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
    const anchorButton = useButton(props);
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
      "button",
      hProps(current, id, anchorButton, block, toggle),
      context.slots
    );
  }
});
