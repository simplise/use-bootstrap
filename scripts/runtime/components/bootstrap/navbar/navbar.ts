import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, addProp } from '../../../composables/utils/useProps';
import { ActiveProps, useActive } from '../../../composables/bootstrap/useItemsActive';
import { IDProps, useID } from '../../../composables/attributes/useID';
import { ScrolledProps, useScrolled } from '../../../composables/extend/useScrolled';
import { defineComponent, h, computed, ref } from '#imports';
import { includesPresets } from '../../../composables/utils/usePresets';
//
export default defineComponent({
 name: 'BsNavbar',
 props: {
  ...BlockProps,
  ...ActiveProps,
  ...IDProps,
  ...ScrolledProps,
  tag: {
   type: String,
   default: 'div',
  },
  expand: {
   type: [Boolean, String], // Empty , tabs , pills
   default: undefined,
  },
  // color: {
  //  type: String, // light, dark
  //  default: undefined,
  // },
  // colorGenerate: {
  //  type: Boolean,
  // },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  const id = useID(props, 'navbar');
  const elementRef = ref<HTMLElement>();
  const active = useActive(props, 'collapse', elementRef);
  const scrolled = useScrolled(props);
  const bgIncludePreset = computed(() => includesPresets('background-color', props.backgroundColor));
  //
  const current = {
   class: computed(() => {
    return {
     navbar: true,
     [`navbar-expand-${props.expand}`]: props.expand,
     // [`navbar-${props.color}`]: props.color,
    };
   }),
   style: computed(() => {
    return {
     ...addProp(props.backgroundColor && !bgIncludePreset, '--bs-navbar-brand-color', `var(--bs-contrast-${props.backgroundColor})`),
    };
   }),
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(current, block, id, active, scrolled), context.slots);
 },
});
