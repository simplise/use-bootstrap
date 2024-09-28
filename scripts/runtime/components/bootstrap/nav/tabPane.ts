import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { FadeShowProps, useFadeShow } from '../../../composables/bootstrap/useFadeShow';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsTabPane',
 props: {
  ...BlockProps,
  ...ActiveProps,
  ...IDProps,
  ...FadeShowProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLDivElement>();
  const block = useBlock(props);
  const id = useID(props, 'tab-pane');
  const active = useActive(props, 'tab', elementRef);
  const fade = useFadeShow(props, context, elementRef, 'tab');
  //
  const current = {
   class: {
    'tab-pane': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(props.tag, hProps(current, block, id, active, fade), context.slots);
 },
});
