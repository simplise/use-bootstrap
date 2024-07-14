import { defineComponent, h, ref } from "#imports";
import { hProps, hSlots } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  CarouselControlProps,
  useCarouselControl
} from "../../../composables/bootstrap/useCarouselControl.js";
export default defineComponent({
  name: "BsCarouselIndicatorsButton",
  props: {
    ...BlockProps,
    ...CarouselControlProps,
    tag: {
      type: String,
      default: "button"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const toggle = useCarouselControl(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(current, block, toggle),
      hSlots(context.slots.default)
    );
  }
});
