import { computed } from "#imports";
export const AccordionProps = {
  flush: {
    type: Boolean
  }
};
export function useAccordion(props) {
  return {
    class: computed(() => {
      return {
        "accordion": true,
        "accordion-flush": props.flush
      };
    })
  };
}
