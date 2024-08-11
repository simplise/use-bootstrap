import { hProps, hSlots } from "../../../utils/useProps.js";
import {
  useAnchor,
  AnchorProps
} from "../../../composables/html/useAnchor.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { NavbarTogglerProps, useNavbarToggler } from "../../../composables/bootstrap/useNavbarToggler.js";
import { useDomExists } from "../../../utils/useDomExists.js";
import { defineComponent, h, ref, computed } from "#imports";
export default defineComponent({
  name: "BsNavbarToggler",
  props: {
    ...BlockProps,
    ...AnchorProps,
    ...ToggleProps,
    ...NavbarTogglerProps,
    tag: {
      type: String,
      default: "button"
    },
    toggle: {
      type: String,
      default: "collapse"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const Anchor = useAnchor(props);
    const toggle = useToggle(props, elementRef);
    const navbarToggler = useNavbarToggler(props);
    const hasNavbar = useDomExists(props.target);
    const current = {
      class: computed(() => {
        if (hasNavbar.value) {
          return {
            "d-none": false
          };
        } else {
          return {
            "d-none": true
          };
        }
      }),
      ref: elementRef
    };
    return () => h(
      "a",
      hProps(current, navbarToggler, Anchor, toggle, block),
      hSlots(context.slots.default, navbarToggler.render)
    );
  }
});
