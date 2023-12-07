import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { CollapseProps, useCollapse } from "../../../composables/bootstrap/useCollapse.mjs";
export default defineComponent({
  name: "BsAccordionCollapse",
  props: {
    ...BlockProps,
    ...CollapseProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const collapse = useCollapse(props, context, elementRef);
    const current = {
      class: {
        "accordion-collapse": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, collapse), context.slots);
  }
});
