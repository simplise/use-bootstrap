import { useImg, ImageProps } from '../../../composables/html/useImg';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCardImgTop',
 props: {
  ...BlockProps,
  ...ImageProps,
  tag: {
   type: String,
   default: 'img',
  },
 },
 setup(props, context) {
  //
  const img = useImg(props);
  const block = useBlock(props);
  //
  const current = {
   class: {
    'card-img-top': true,
   },
   attr: {
    loading: 'lazy',
   },
  };
  // Nuxt Imageで画像表示がされない場合がある
  // useImage 不成功
  // https://usebootstrap.org/lang-en/components/card
  return () => h(props.tag, hProps(current, img, block), context.slots);
 },
});
