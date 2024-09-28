import { hProps } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { IntersectionAnimateProps, useIntersectionAnimate } from '../../../composables/extend/useIntersectionAnimate';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'IntersectionAnimate',
 props: {
  ...BlockProps,
  ...IntersectionAnimateProps,
  tag: {
   type: String,
   default: 'div',
  },
  intersection: {
   default: true,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const animate = useIntersectionAnimate(props, context, elementRef);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(current, block, animate), context.slots);
 },
});
