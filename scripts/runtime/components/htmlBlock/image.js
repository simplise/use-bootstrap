import { defineComponent, h } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { useImage, ImageProps } from "../../composables/html/useImage.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { NuxtImg } from "#components";
export default defineComponent({
  name: "HtmlImage",
  props: {
    ...BlockProps,
    ...ImageProps,
    tag: {
      type: String,
      default: "img"
    }
  },
  setup(props) {
    const block = useBlock(props);
    const image = useImage(props);
    return () => h(NuxtImg, hProps(image, block));
  }
});
