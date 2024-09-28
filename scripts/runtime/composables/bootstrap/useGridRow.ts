import { addClassNames } from '../../composables/utils/useProps';
import { isString } from '../utils/helpers';
import { BlockProps, useBlock, type IBlockProps } from '../../composables/base/useBlock';
import { computed } from '#imports';
//
export const GridRowProps = {
 ...BlockProps,
 auto: {
  type: Boolean,
 },
 columns: {
  type: String,
 },
 align: {
  type: String,
 },
 rowreverse: {
  type: [Boolean],
 },
 gutter: {
  type: [Number, String],
 },
};
//
export interface IGridRowProps extends IBlockProps {
 row?: boolean;
 auto?: boolean;
 columns?: string;
 align?: string | boolean;
 rowreverse?: boolean;
 gutter?: number | string;
}
//
export function useGridRow<P extends IGridRowProps>(props: P) {
 //
 const block = useBlock(props);
 //
 return {
  class: computed(() => {
   return {
    'row': props.row,
    'row-cols-auto': props.auto,
    'flex-row-reverse': props.rowreverse,
    [`align-${props.align}`]: props.align,
    ...addClassNames(props.columns, n => `row-cols-${n}`),
    ...addClassNames(
     props.gutter,
     n =>
      `g${isString(props.gutter) && ['x', 'y'].includes(n.substring(0, 1))
       ? `${n}`
       : `-${n}`
      }`,
    ),
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
