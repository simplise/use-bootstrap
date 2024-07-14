import { defineComponent, h, ref } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
export default defineComponent({
  name: "BsAccordionItem",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "accordion-item");
    const elementRef = ref();
    const active = useActive(props, "collapse", elementRef);
    const current = {
      class: {
        "accordion-item": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(id, current, active, block), context.slots);
  }
});
