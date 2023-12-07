import { defineComponent, h, ref, computed } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import { NavbarTogglerProps, useNavbarToggler } from "../../../composables/bootstrap/useNavbarToggler.mjs";
import { useDomExists } from "../../../composables/public/useDomExists.mjs";
export default defineComponent({
  name: "BsNavbarToggler",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
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
    const anchorButton = useAnchorButton(props);
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
      anchorButton.tag,
      hProps(current, navbarToggler, anchorButton, toggle, block),
      hSlots(context.slots.default, navbarToggler.render)
    );
  }
});
