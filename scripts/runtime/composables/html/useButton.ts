import { addProp, hasValue } from '../../composables/utils/useProps';
import type { IInlineProps } from '../../composables/base/useInline';
import { type IEventEmitProps, EventEmitProps } from '../utils/useEventEmitter';
import { computed } from '#imports';
//
export const ButtonProps = {
 ...EventEmitProps,
 button: {
  type: [String, Boolean],
  default: 'primary',
 },
 size: {
  type: String,
 },
 disabled: {
  type: Boolean,
 },
 type: {
  type: String,
  default: 'button',
 },
 to: {
  type: String,
 },
 colorGenerate: {
  type: Boolean,
 },
};
//
export interface IButtonProps
 extends IInlineProps,
 IEventEmitProps {
 button?: string | boolean;
 size?: string;
 disabled?: boolean;
 type?: string;
 to?: string;
 colorGenerate?: boolean;
}
//
export function useButton<P extends IButtonProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    disabled: props.disabled,
    btn: props.button,
    [`btn-${props.button}`]: hasValue(props.button),
    [`btn-${props.size}`]: props.size,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(props.colorGenerate, '--bs-btn-bg', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-hover-bg', `var(--bs-active-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-active-bg', `var(--bs-active-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-border-color', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-hover-border-color', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-active-border-color', `var(--bs-active-${props.button})`),
    ...addProp(!props.textColor && props.colorGenerate, '--bs-btn-color', `var(--bs-contrast-${props.button})`),
    ...addProp(!props.textColor && props.colorGenerate, '--bs-btn-hover-color', `var(--bs-contrast-${props.button})`),
    ...addProp(!props.textColor && props.colorGenerate, '--bs-btn-active-color', `var(--bs-contrast-${props.button})`),
   };
  }),
  attr: computed(() => {
   return {
    type: props.type,
    ...addProp(props.disabled, 'aria-disabled', 'true'),
    ...addProp(props.target, 'data-bv-target', props.target),
   };
  }),
 };
}
