import { addProp } from '../../composables/utils/useProps';
import type { IInlineProps } from '../../composables/base/useInline';
import {
 type IVisuallyHiddenContentProps,
 useVisuallyHiddenContent,
 VisuallyHiddenContentProps,
} from './useVisuallyHiddenContent';
import { computed } from '#imports';
import { includesPresets } from '../../composables/utils/usePresets';
//
export const BadgeProps = {
 ...VisuallyHiddenContentProps,
 rounded: {
  type: String, // pill , circle
 },
 color: {
  type: String, //

 },
};
//
export interface IBadgeProps extends IVisuallyHiddenContentProps, IInlineProps {
 rounded?: string;
 color?: string;
}
//
export function useBadge<P extends IBadgeProps>(props: P) {
 const visuallyHidden = useVisuallyHiddenContent(props);
 const textBgIncludePreset = computed(() => includesPresets('text-bg-color', props.color));
 //
 return {
  class: computed(() => {
   return {
    badge: true,
    [`rounded-${props.rounded}`]: props.rounded,
    [`text-bg-${props.color}`]: props.color && textBgIncludePreset.value,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(props.color && !textBgIncludePreset.value, 'background-color', `var(--bs-${props.color})`),
    ...addProp(props.color && !textBgIncludePreset.value, '--bs-badge-color', `var(--bs-contrast-${props.color})`),
   };
  }),
  render: visuallyHidden.render,
 };
}
