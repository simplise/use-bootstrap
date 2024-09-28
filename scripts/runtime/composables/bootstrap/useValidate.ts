import type { Ref } from 'vue';
import type { IInlineProps } from '../../composables/base/useInline';
import { unrefElement } from '../utils/helpers';
import { addProp } from '../../composables/utils/useProps';
import { computed, ref } from '#imports';

export const ValidateProps = {
 novalidate: {
  type: Boolean,
 },
 wasVlidated: {
  type: Boolean,
  default: false,
 },
};

export interface IValidateionProps extends IInlineProps {
 novalidate?: boolean;
 wasVlidated?: boolean;
}

export function useValidate<P extends IValidateionProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const validated = ref(props.wasVlidated);
 //
 const validate = (event: Event) => {
  const element = unrefElement(elementRef) as HTMLFormElement;
  if (element && !element.checkValidity()) {
   event.preventDefault();
   event.stopPropagation();
  }
  validated.value = true;
 };
 //
 return {
  class: computed(() => {
   return {
    'was-validated': validated.value,
   };
  }),
  attr: computed(() => {
   return {
    ...addProp(props.novalidate, 'novalidate', 'novalidate'),
   };
  }),
  event: {
   onSubmit: validate,
  },
 };
}
