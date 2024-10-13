import { useImg, ImageProps } from "../../../composables/html/useImg.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsCardImgBottom",
  props: {
    ...BlockProps,
    ...ImageProps,
    tag: {
      type: String,
      default: "img"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const image = useImg(props);
    const current = {
      class: {
        "card-img-bottom": true
      }
    };
    return () => h(props.tag, hProps(current, image, block), context.slots);
  }
});
