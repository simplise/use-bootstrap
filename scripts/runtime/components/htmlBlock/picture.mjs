import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useImage, ImageProps } from "../../composables/html/useImage.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
export default defineComponent({
  name: "HtmlPicture",
  inheritAttrs: false,
  props: {
    ...BlockProps,
    ...ImageProps,
    srcset: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "picture"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const image = useImage(props);
    return () => h(props.tag, {}, [
      props.srcset ? h(
        "source",
        {
          srcset: props.srcset
        },
        void 0
      ) : void 0,
      context.slots.default ? context.slots.default() : void 0,
      h(
        "img",
        {
          ...context.attrs,
          ...hProps(image, block)
        },
        void 0
      )
    ]);
  }
});
