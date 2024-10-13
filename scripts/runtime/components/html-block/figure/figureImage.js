import { hProps } from "../../../composables/utils/useProps.js";
import { useImg, ImageProps } from "../../../composables/html/useImg.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
import { NuxtPicture } from "#components";
export default defineComponent({
  name: "BsFigureImage",
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
        "figure-img": true
      }
    };
    return () => h(NuxtPicture, hProps(image, block, current), context.slots);
  }
});
