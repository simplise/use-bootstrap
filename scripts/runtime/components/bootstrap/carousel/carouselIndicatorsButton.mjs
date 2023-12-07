import { defineComponent, h, ref } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  CarouselControlProps,
  useCarouselControl
} from "../../../composables/bootstrap/useCarouselControl.mjs";
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
