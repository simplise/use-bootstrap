import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
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
