import { useImg, ImageProps } from "../../../composables/html/useImg.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsCardImgTop",
  props: {
    ...BlockProps,
    ...ImageProps,
    tag: {
      type: String,
      default: "img"
    }
  },
  setup(props, context) {
    const img = useImg(props);
    const block = useBlock(props);
    const current = {
      class: {
        "card-img-top": true
      },
      attr: {
        loading: "lazy"
      }
    };
    return () => h(props.tag, hProps(current, img, block), context.slots);
  }
});
