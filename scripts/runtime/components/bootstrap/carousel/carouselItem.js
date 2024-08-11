import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import {
  CarouselActiveProps,
  useCarouselActive
} from "../../../composables/bootstrap/useCarouselActive.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsCarouselItem",
  props: {
    ...BlockProps,
    ...CarouselActiveProps,
    ...IDProps,
    tag: {
      type: String,
      default: "div"
    },
    interval: {
      type: [Number, String],
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "carousel-item");
    const carouselItem = useCarouselActive(props, elementRef, "carousel");
    const current = {
      class: {
        "carousel-item": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(id, current, carouselItem, block), context.slots);
  }
});
