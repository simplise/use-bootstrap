import { hProps } from '../../../composables/utils/useProps';
import { useAreaLabel } from '../../../composables/attributes/useAreaLabel';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import { useID, IDProps } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsModalTitle',
 props: {
  ...BlockProps,
  ...IDProps,
  level: {
   type: Number,
   default: 5,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'modal-title'); // for useAreaLavel
  const areaLabel = useAreaLabel(props, elementRef);
  //
  const current = {
   class: {
    'modal-title': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(`h${props.level}`, hProps(current, block, id, areaLabel), context.slots);
 },
});
