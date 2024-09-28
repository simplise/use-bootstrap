import { hProps } from '../../../composables/utils/useProps';
import { useImg, ImageProps } from '../../../composables/html/useImg';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
// import { NuxtImg } from '#components';
//
export default defineComponent({
 name: 'BsCarouselItemImage',
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
  const block = useBlock(props);
  const image = useImg(props);
  //
  const current = {
   class: {
    'd-block': true,
    'w-100': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, image, block), context.slots);
 },
});
