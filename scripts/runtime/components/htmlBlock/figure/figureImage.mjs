import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useImage, ImageProps } from "../../../composables/html/useImage.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
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
