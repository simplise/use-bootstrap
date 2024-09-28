import { computed } from 'vue';
import { BlockProps, useBlock, type IBlockProps } from '../../composables/base/useBlock';
//
export const GridContainerProps = {
 ...BlockProps,
 type: {
  type: String, // fluid , {breakpoint}
 },
};
//
export interface IGridContainerProps extends IBlockProps {
 type?: string;
}
//
export function useGridContainer<P extends IGridContainerProps>(props: P) {
 // block 拡張
 const block = useBlock(props);
 //
 return {
  class: computed(() => {
   return {
    [`container-${props.type}`]: props.type,
    container: !props.type,
    ...block.class.value,
   };
  }),
  style: computed(() => {
   return {
    ...block.style.value,
   };
  }),
 };
}
