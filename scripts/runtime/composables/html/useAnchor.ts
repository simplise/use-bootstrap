import { addProp, hasValue } from '../../composables/utils/useProps';
import type { IElementProps } from '../../composables/base/useInline';
import { type IEventEmitProps, EventEmitProps } from '../utils/useEventEmitter';
import { useDynamicRoute } from '../../composables/extend/dynamicRoute/useDynamicRoute';
import { includesPresets } from '../../composables/utils/usePresets';
import { computed } from '#imports';
//
export const AnchorProps = {
 ...EventEmitProps,
 button: {
  type: Boolean,
  default: undefined,
 },
 size: {
  type: String,
  default: undefined,
 },
 disabled: {
  type: Boolean,
  default: undefined,
 },
 stretched: {
  type: Boolean,
  default: undefined,
 },
 color: {
  type: String,
  default: undefined,
 },
 to: {
  type: String,
  default: undefined,
 },
 activeBackgroundColor: {
  type: String,
  default: undefined,
 },
 activeBorderColor: {
  type: String,
  default: undefined,
 },
 activeColor: {
  type: String,
  default: undefined,
 },
 dynamicRoute: {
  type: Boolean,
  default: undefined,
 },
 external:{
  type: Boolean,
  default: undefined,
 }
};
//
export interface IAnchorProps
 extends IElementProps,
 IEventEmitProps {
 button?: boolean;
 size?: string;
 disabled?: boolean;
 stretched?: boolean;
 color?: string;
 type?: string;
 to?: string;
 activeBackgroundColor?: string;
 activeBorderColor?: string;
 activeColor?: string;
 dynamicRoute?: boolean;
 external?: boolean;
}
//
export function useAnchor<P extends IAnchorProps>(props: P) {
 const colorIncludePreset = computed(() => includesPresets(props.button ? "button-color" : 'link-color', props.color));
 //
 return {
  class: computed(() => {
   return {
    'stretched-link': props.stretched,
    'disabled': props.disabled,
    [`link-${props.color}`]: props.color && !props.button && colorIncludePreset.value,
    'btn': props.button,
    [`btn-${props.color}`]: props.color && props.button && colorIncludePreset.value,
    [`btn-${props.size}`]: props.size && props.button,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-bg', `var(--bs-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-color', `var(--bs-contrast-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-border-color', `var(--bs-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-hover-color', `var(--bs-contrast-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-hover-bg', `var(--bs-active-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-hover-border-color', `var(--bs-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-active-color', `var(--bs-contrast-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-active-bg', `var(--bs-active-${props.color})`),
    ...addProp(props.color && !colorIncludePreset.value, '--bs-btn-active-border-color', `var(--bs-active-${props.color})`),
    ...addProp(props.activeBackgroundColor, '--bs-btn-active-bg', `var(--bs-${props.activeBackgroundColor})`),
    ...addProp(props.activeBackgroundColor, '--bs-btn-active-color', `var(--bs-contrast-${props.activeBackgroundColor})`),
    ...addProp(props.activeBorderColor, '--bs-btn-active-border-color', `var(--bs-${props.activeBorderColor})`),
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(props.button, 'role', 'button'),
    ...addProp(props.disabled, 'aria-disabled', 'true'),
    ...addProp(props.href, 'href', props.href),
    ...addProp(props.target, 'target', props.target),
    ...addProp(!props.target && props.external, 'target', '_blank'),
    ...addProp(props.external, 'rel', 'noopener'),
    ...addProp(props.to, 'to', props.dynamicRoute ? useDynamicRoute(props.to || "").value : props.to),
   };
  }),
 };
}
