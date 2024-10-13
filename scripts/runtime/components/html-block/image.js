import { hProps } from "../../composables/utils/useProps.js";
import { useImg, ImageProps } from "../../composables/html/useImg.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
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
    const image = useImg(props);
    return () => h(props.tag, hProps(image, block));
  }
});
