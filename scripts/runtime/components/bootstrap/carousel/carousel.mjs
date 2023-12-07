import { defineComponent, h, ref } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { useCarousel, CarouselProps } from "../../../composables/bootstrap/useCarousel.mjs";
export default defineComponent({
  name: "BsCarousel",
  props: {
    ...BlockProps,
    ...CarouselProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const carousel = useCarousel(props, elementRef, "carousel");
    const current = {
      class: {
        carousel: true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(current, carousel, block),
      hSlots(
        carousel.renderIndicators,
        context.slots.default,
        carousel.renderControl
      )
    );
  }
});
