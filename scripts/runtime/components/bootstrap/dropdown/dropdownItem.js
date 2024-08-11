import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import {
  useAnchor,
  AnchorProps
} from "../../../composables/html/useAnchor.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import BsLink from "../../nuxt/bsActiveLink.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsDropdownItem",
  props: {
    ...BlockProps,
    ...IDProps,
    ...ActiveProps,
    ...AnchorProps,
    ...ToggleProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "dropdown-item");
    const spyItem = useScrollSpyItem(props, elementRef);
    const active = useActive(props, "nav", elementRef);
    const Anchor = useAnchor(props);
    const toggle = useToggle(props, elementRef);
    return () => h(
      "li",
      hProps(block),
      h(
        BsLink,
        hProps(
          {
            class: {
              "dropdown-item": true
            },
            ref: elementRef
          },
          Anchor,
          active,
          spyItem,
          toggle,
          id
        ),
        context.slots.default
      )
    );
  }
});
