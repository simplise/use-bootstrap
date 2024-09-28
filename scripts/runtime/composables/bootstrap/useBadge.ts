import { addProp } from '../../composables/utils/useProps';
import type { IInlineProps } from '../../composables/base/useInline';
import {
 type IVisuallyHiddenContentProps,
 useVisuallyHiddenContent,
 VisuallyHiddenContentProps,
} from './useVisuallyHiddenContent';
import { computed } from '#imports';
//
export const BadgeProps = {
 ...VisuallyHiddenContentProps,
 rounded: {
  type: String, // pill , circle
 },
 colorGenerate: {
  type: Boolean,
 },
};
//
export interface IBadgeProps extends IVisuallyHiddenContentProps, IInlineProps {
 rounded?: string;
 colorGenerate?: boolean;
}
//
export function useBadge<P extends IBadgeProps>(props: P) {
 const visuallyHidden = useVisuallyHiddenContent(props);
 //
 return {
  class: computed(() => {
   return {
    badge: true,
    [`rounded-${props.rounded}`]: props.rounded,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(props.colorGenerate, '--bs-badge-color', `var(--bs-contrast-${props.backgroundColor})`),
   };
  }),
  render: visuallyHidden.render,
 };
}
