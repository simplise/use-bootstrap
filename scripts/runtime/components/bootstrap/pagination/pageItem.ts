import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 usePageItem,
 PageItemProps,
} from '../../../composables/bootstrap/usePagination';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsPageItem',
 props: {
  ...BlockProps,
  ...PageItemProps,
  tag: {
   type: String,
   default: 'li',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const pageItemOptions = usePageItem(props);
  //
  return () => h(props.tag, hProps(pageItemOptions, block), context.slots);
 },
});
