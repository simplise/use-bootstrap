import { defineComponent, h, ref } from "#imports";
import { hProps, exposeMethods } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  useAccordion,
  AccordionProps
} from "../../../composables/bootstrap/useAccordion.mjs";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.mjs";
export default defineComponent({
  name: "BsAccordion",
  props: {
    ...BlockProps,
    ...AccordionProps,
    ...CurrentProps,
    tag: {
      type: String,
      default: "div"
    },
    parent: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const accordion = useAccordion(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "collapse");
    exposeMethods(context, accordion, itemsCurrent, block);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(accordion, itemsCurrent, block, current), context.slots);
  }
});
