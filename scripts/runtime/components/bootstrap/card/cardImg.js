import { defineComponent, h } from "#imports";
import { useImage, ImageProps } from "../../../composables/html/useImage.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { NuxtImg } from "#components";
export default defineComponent({
  name: "BsCardImg",
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
        "card-img": true
      }
    };
    return () => h(NuxtImg, hProps(current, image, block), context.slots);
  }
});
