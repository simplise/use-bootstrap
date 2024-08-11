import { hProps } from "../../../utils/useProps.js";
import { useImage, ImageProps } from "../../../composables/html/useImage.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
import { NuxtImg } from "#components";
export default defineComponent({
  name: "BsCarouselItemImage",
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
        "d-block": true,
        "w-100": true
      }
    };
    return () => h(NuxtImg, hProps(current, image, block), context.slots);
  }
});
