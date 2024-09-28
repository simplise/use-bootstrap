import { computed } from '#imports';
//
export const AccordionProps = {
 flush: {
  type: Boolean,
 },
};
//
export interface IAccordionProps {
 flush?: boolean;
}
//
export function useAccordion<P extends IAccordionProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    'accordion': true,
    'accordion-flush': props.flush,
   };
  }),
 };
}
