import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, hSlots, exposeMethods } from '../../../composables/utils/useProps';
import {
 useOffcanvas,
 OffcanvasProps,
} from '../../../composables/bootstrap/useOffcanvas';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsOffcanvas',
 props: {
  ...BlockProps,
  ...IDProps,
  ...OffcanvasProps,
  tag: {
   type: String,
   default: 'div',
  },
  placement: {
   type: String, // start end top bottom
   default: 'end',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const id = useID(props, 'offcanvas');
  const offcanvas = useOffcanvas(props, context, elementRef);
  //
  exposeMethods(context, offcanvas, block);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () => [
   h(
    props.tag,
    hProps(current, id, offcanvas, block),
    hSlots(context.slots.default),
   ),
   offcanvas.render(),
  ];
 },
});
