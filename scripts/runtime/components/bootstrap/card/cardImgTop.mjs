import { defineComponent, h } from "vue";
import { useImage, ImageProps } from "../../../composables/html/useImage.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { NuxtImg } from "#components";
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
    const image = useImage(props);
    const block = useBlock(props);
    const current = {
      class: {
        "card-img-top": true
      }
    };
    return () => h(NuxtImg, hProps(current, image, block), context.slots);
  }
});
