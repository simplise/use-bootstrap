import { addProp, hasValue } from '../../composables/utils/useProps';
import type { IElementProps } from '../../composables/base/useInline';
import { type IEventEmitProps, EventEmitProps } from '../utils/useEventEmitter';
import { computed } from '#imports';
//
export const AnchorProps = {
 ...EventEmitProps,
 button: {
  type: [Boolean, String],
 },
 size: {
  type: String,
 },
 disabled: {
  type: Boolean,
 },
 stretchedLink: {
  type: Boolean,
 },
 link: {
  type: String,
 },
 to: {
  type: String,
 },
 colorGenerate: {
  type: Boolean,
 },
};
//
export interface IAnchorProps
 extends IElementProps,
 IEventEmitProps {
 button?: boolean | string;
 size?: string;
 disabled?: boolean;
 stretchedLink?: boolean;
 link?: string;
 type?: string;
 to?: string;
 colorGenerate?: boolean;
}
//
export function useAnchor<P extends IAnchorProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    'stretched-link': props.stretchedLink,
    'disabled': props.disabled,
    [`link-${props.link}`]: props.link,
    'btn': props.button,
    [`btn-${props.button}`]: hasValue(props.button),
    [`btn-${props.size}`]: props.size,
   };
  }),
  style: computed(() => {
   return {
    ...addProp(props.colorGenerate, '--bs-btn-bg', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-color', `var(--bs-contrast-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-border-color', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-hover-color', `var(--bs-contrast-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-hover-bg', `var(--bs-active-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-hover-border-color', `var(--bs-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-active-color', `var(--bs-contrast-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-active-bg', `var(--bs-active-${props.button})`),
    ...addProp(props.colorGenerate, '--bs-btn-active-border-color', `var(--bs-active-${props.button})`),
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(props.button, 'role', 'button'),
    ...addProp(props.disabled, 'aria-disabled', 'true'),
    ...addProp(props.href, 'href', props.href),
    ...addProp(props.target, 'target', props.target),
    ...addProp(props.to, 'to', props.to),
   };
  }),
 };
}
