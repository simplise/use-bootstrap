import { hProps } from '../../../composables/utils/useProps';
import {
 useGridContainer,
 GridContainerProps,
} from '../../../composables/bootstrap/useGridContainer';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsGridContainer',
 props: {
  ...GridContainerProps,
  tag: {
   type: String,
   default: 'div',
  },
 },
 setup(props, context) {
  //
  const gridContainer = useGridContainer(props);
  //
  return () => h(props.tag, hProps(gridContainer), context.slots);
 },
});
