import { hProps, exposeMethods, addProp } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { defineComponent, h, ref, computed } from '#imports';

//
export default defineComponent({
 name: 'StatusIndicator',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  //
  exposeMethods(context, block);
  //
  const current = {
   ref: elementRef,
   class: {
    'status-indicator': true,
    'align-middle': true,
    'd-inline-block': true,
    'me-2': !props.margin,
   },
   style: computed(() => {
    return {
     ...addProp(props.color, 'background-color', `var(--bs-${props.color})`),
     ...{
      'border-radius': 'var(--bs-border-radius-pill)',
      'width': '.5em',
      'height': '.5em',
     },
    };
   }),
  };
  //
  return () => h(props.tag, hProps(block, current), context.slots);
 },
});
