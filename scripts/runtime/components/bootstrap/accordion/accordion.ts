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
    activeColor: {
      type: String,
      default: undefined,
    },
    activeBackgroundColor: {
      type: String,
      default: undefined,
    },
    activeButtonColor: {
      type: String,
      default: undefined,
    },
    buttonIconWidth: {
      type: String,
      default: undefined,
    },
    backgroundColor: {
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
          // ...addProp(props.color && !props.activeColor, '--bs-accordion-active-color', `var(--bs-contrast-${props.color})`), // color にtransparent が指定されると文字が消える
          ...addProp(props.activeColor, '--bs-accordion-active-color', `var(--bs-${props.activeColor})`),
          ...addProp(props.color && !props.activeBackgroundColor, '--bs-accordion-active-bg', `var(--bs-${props.color})`),
          ...addProp(props.activeBackgroundColor, '--bs-accordion-active-bg', `var(--bs-${props.activeBackgroundColor})`),
          ...addProp(props.activeButtonColor, '--bs-btn-active-bg', `var(--bs-${props.activeButtonColor})`),
          ...addProp(props.color, '--bs-accordion-btn-focus-box-shadow', `var(--bs-active-${props.color})`),
          ...addProp(props.buttonIconWidth, '--bs-accordion-btn-icon-width', `${props.buttonIconWidth}`),
          ...addProp(props.backgroundColor, '--bs-accordion-bg', `var(--bs-${props.backgroundColor})`),
          //...addProp(props.color, '--bs-accordion-color', `var(--bs-${props.color})`),
        };
      }),
    };
    //
    return () =>
      h(props.tag, hProps(accordion, itemsCurrent, block, current), context.slots);
  },
});
