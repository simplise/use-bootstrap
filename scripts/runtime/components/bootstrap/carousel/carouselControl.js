import { hProps, hSlots } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  CarouselControlProps,
  useCarouselControl
} from "../../../composables/bootstrap/useCarouselControl.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsCarouselControl",
  props: {
    ...BlockProps,
    ...CarouselControlProps,
    tag: {
      type: String,
      default: "button"
    },
    control: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const toggle = useCarouselControl(props, elementRef);
    return () => h(
      props.tag,
      hProps(block, toggle),
      hSlots(context.slots.default, toggle.renderControl)
    );
  }
});
