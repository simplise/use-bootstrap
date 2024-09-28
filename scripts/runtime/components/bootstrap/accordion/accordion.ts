import { hProps, exposeMethods, addProp } from '../../../composables/utils/useProps';
import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import {
 useAccordion,
 AccordionProps,
} from '../../../composables/bootstrap/useAccordion';
import {
 CurrentProps,
 useItemsCurrent,
} from '../../../composables/bootstrap/useItemsCurrent';
import { defineComponent, h, ref, computed } from '#imports';

//
export default defineComponent({
 name: 'BsAccordion',
 props: {
  ...BlockProps,
  ...AccordionProps,
  ...CurrentProps,
  tag: {
   type: String,
   default: 'div',
  },
  parent: {
   type: Boolean,
   default: false,
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const accordion = useAccordion(props);
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'collapse');
  //
  exposeMethods(context, accordion, itemsCurrent, block);
  //
  const current = {
   ref: elementRef,
   style: computed(() => {
    return {
     ...addProp(props.color, '--bs-accordion-border-color', `var(--bs-active-${props.color})`),
     ...addProp(!props.textColor && props.color, '--bs-accordion-btn-focus-border-color', `var(--bs-active-${props.color})`),
     ...addProp(props.color, '--bs-accordion-active-color', `var(--bs-contrast-${props.color})`),
     ...addProp(props.color, '--bs-accordion-active-bg', `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-accordion-btn-focus-box-shadow', `var(--bs-active-${props.color})`),
    };
   }),
  };
  //
  return () =>
   h(props.tag, hProps(accordion, itemsCurrent, block, current), context.slots);
 },
});
