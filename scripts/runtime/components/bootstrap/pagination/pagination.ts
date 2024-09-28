import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 usePagination,
 PaginationProps,
} from '../../../composables/bootstrap/usePagination';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsPagination',
 props: {
  ...BlockProps,
  ...PaginationProps,
  tag: {
   type: String,
   default: 'ul',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const paginationOptions = usePagination(props);
  //
  return () => h(props.tag, hProps(paginationOptions, block), context.slots);
 },
});
