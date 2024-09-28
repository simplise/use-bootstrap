import { hProps, hSlots } from '../../../composables/utils/useProps';
import {
 useAnchor,
 AnchorProps,
} from '../../../composables/html/useAnchor';
import { ToggleProps, useToggle } from '../../../composables/bootstrap/useToggle';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import { NavbarTogglerProps, useNavbarToggler } from '../../../composables/bootstrap/useNavbarToggler';
import { useDomExists } from '../../../composables/utils/useDomExists';
import { defineComponent, h, ref, computed } from '#imports';
//
export default defineComponent({
 name: 'BsNavbarToggler',
 props: {
  ...BlockProps,
  ...AnchorProps,
  ...ToggleProps,
  ...NavbarTogglerProps,
  tag: {
   type: String,
   default: 'button',
  },
  toggle: {
   type: String,
   default: 'collapse',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const Anchor = useAnchor(props);
  const toggle = useToggle(props, elementRef);
  const navbarToggler = useNavbarToggler(props);
  // const hasNavbar = useDomExists(props.target);
  //
  const current = {
  //  class: computed(() => {
  //   if (hasNavbar.value) {
  //    return {
  //     'd-none': false,
  //    };
  //   }
  //   else {
  //    return {
  //     'd-none': true,
  //    };
  //   }
  //  }),
   ref: elementRef,
  };
  //
  return () =>
   h(
    'a',
    hProps(current, navbarToggler, Anchor, toggle, block),
    hSlots(context.slots.default, navbarToggler.render),
   );
 },
});
