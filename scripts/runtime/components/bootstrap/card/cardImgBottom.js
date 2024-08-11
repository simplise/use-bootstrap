import { useImage, ImageProps } from "../../../composables/html/useImage.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h } from "#imports";
import { NuxtImg } from "#components";
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
    const image = useImage(props);
    const current = {
      class: {
        "card-img-bottom": true
      }
    };
    return () => h(NuxtImg, hProps(current, image, block), context.slots);
  }
});
