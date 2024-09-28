import type { IElementProps } from '../../composables/base/useInline';
import { computed } from '#imports';
//
export const HeadingsProps = {
 level: {
  type: [Number, String],
  default: 1,
 },
 displayHeadings: {
  type: [Number, String], // 1～6
 },
};
//
export interface IheadingsProps {
 level?: number | string;
 displayHeadings?: number | string;
}
interface IProps extends IheadingsProps, IElementProps {

}
//
export function useHeadings<P extends IProps>(
 props: P,
) {
 //
 const opt = {
  level: 3,
  ...props,
 };
 //
 return {
  class: computed(() => {
   return {
    [`display-${opt.displayHeadings}`]: opt.displayHeadings,
   };
  }),
  tag: props.tag ? props.tag : `h${opt.level}`,
 };
}
