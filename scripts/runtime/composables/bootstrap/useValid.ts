import { computed } from '#imports';
//
export const ValidProps = {
 inValid: {
  type: [Boolean, Array], // true, false, invalid , valid , is-invalid, is-valid
  default: undefined,
 },
 validate: {
  type: Boolean, // true, false, invalid , valid , is-invalid, is-valid
  default: undefined,
 },
};

export interface IValidProps {
 inValid?: boolean | unknown[];
 validate?: boolean;
}

export function useValid<P extends IValidProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    [`is-${props.inValid ? 'invalid' : 'valid'}`]: props.validate,
   };
  }),
 };
}
