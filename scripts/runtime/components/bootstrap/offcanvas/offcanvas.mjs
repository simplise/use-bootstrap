import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import {
  useOffcanvas,
  OffcanvasProps
} from "../../../composables/bootstrap/useOffcanvas.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsOffcanvas",
  props: {
    ...BlockProps,
    ...IDProps,
    ...OffcanvasProps,
    tag: {
      type: String,
      default: "div"
    },
    placement: {
      type: String,
      // start end top bottom
      default: "end"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "offcanvas");
    const offcanvas = useOffcanvas(props, context, elementRef);
    const current = {
      ref: elementRef
    };
    return () => [
      h(
        props.tag,
        hProps(current, id, offcanvas, block),
        hSlots(context.slots.default)
      ),
      offcanvas.render()
    ];
  }
});
