import { hProps } from '../../composables/utils/useProps';
import { useImg, ImageProps } from '../../composables/html/useImg';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { defineComponent, h } from '#imports';
// import { NuxtImg } from '#components';

export default defineComponent({
 name: 'HtmlImage',
 props: {
  ...BlockProps,
  ...ImageProps,
  tag: {
   type: String,
   default: 'img',
  },
 },
 setup(props) {
  //
  const block = useBlock(props);
  const image = useImg(props);
  //
  return () => h(props.tag, hProps(image, block));
 },
});
