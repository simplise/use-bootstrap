import { defineComponent, h, ref } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { IntersectionAnimateProps, useIntersectionAnimate } from "../../../composables/extend/useIntersectionAnimate.js";
export default defineComponent({
  name: "IntersectionAnimate",
  props: {
    ...BlockProps,
    ...IntersectionAnimateProps,
    tag: {
      type: String,
      default: "div"
    },
    intersection: {
      default: true
    }
    // intersectionOptions: {
    //   type: Object as PropType<UseIntersectionObserverOptions>
    // }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const animate = useIntersectionAnimate(props, context, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, animate), context.slots);
  }
});
