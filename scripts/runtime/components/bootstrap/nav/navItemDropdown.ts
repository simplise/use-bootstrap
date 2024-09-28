import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, exposeMethods } from '../../../composables/utils/useProps';
import { useID, IDProps } from '../../../composables/attributes/useID';
import { DropdownProps, useDropdown } from '../../../composables/bootstrap/useDropdown';
import { computed, defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsNavItemDropdown',
 props: {
  ...BlockProps,
  ...IDProps,
  ...DropdownProps,
  tag: {
   type: String,
   default: 'li',
  },
  inline: {
   type: Boolean,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const active = ref(false);
  //
  const block = useBlock(props);
  const id = useID(props, 'nav-item-dropdown');
  const dropdown = useDropdown(props, context, elementRef);
  //
  const current = {
   class: computed(() => {
    return {
     'dropdown': true,
     'nav-item': true,
     'list-inline-item': props.inline,
     'active': active.value,
    };
   }),
  };
  //
  exposeMethods(context, current);
  //
  return () =>
   h(props.tag, hProps(current, block, id, dropdown), context.slots);
 },
});
