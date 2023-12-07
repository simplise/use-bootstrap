import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import {
  CarouselActiveProps,
  useCarouselActive
} from "../../../composables/bootstrap/useCarouselActive.mjs";
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
