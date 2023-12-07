import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
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
