import { defineComponent, h } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import { useImage, ImageProps } from "../../../composables/html/useImage.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
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
    const image = useImage(props);
    const current = {
      class: {
        "figure-img": true
      }
    };
    return () => h(NuxtPicture, hProps(image, block, current), context.slots);
  }
});
