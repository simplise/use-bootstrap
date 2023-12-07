import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
import BsLink from "../../nuxt/bslink.mjs";
export default defineComponent({
  name: "BsDropdownItem",
  props: {
    ...BlockProps,
    ...IDProps,
    ...ActiveProps,
    ...AnchorButtonProps,
    ...ToggleProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "dropdown-item");
    const spyItem = useScrollSpyItem(props, elementRef);
    const active = useActive(props, "nav", elementRef);
    const anchorButton = useAnchorButton(props);
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
          anchorButton,
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
