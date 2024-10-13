import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsCarouselCaption",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        [`carousel-caption`]: true,
        "d-none": true,
        "d-md-block": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
