import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useImage, ImageProps } from "../../composables/html/useImage.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
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
