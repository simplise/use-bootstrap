import { hProps } from '../../composables/utils/useProps';
import { useImg, ImageProps } from '../../composables/html/useImg';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
  name: 'HtmlPicture',
  inheritAttrs: false,
  props: {
    ...BlockProps,
    ...ImageProps,
    srcset: {
      type: String,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'picture',
    },
  },
  setup(props, context) {
    //
    const block = useBlock(props);
    const image = useImg(props);
    //
    return () =>
      h(props.tag, {}, [
        props.srcset
          ? h(
            'source',
            {
              srcset: props.srcset,
            },
            undefined,
          )
          : undefined,
        context.slots.default ? context.slots.default() : undefined,
        h(
          'img',
          {
            ...context.attrs,
            ...hProps(image, block),
          },
          undefined,
        ),
      ]);
  },
});
