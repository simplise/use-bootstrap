import { defineComponent, h, ref, computed } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../utils/useProps.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import {
  AnchorProps,
  useAnchor
} from "../../../composables/html/useAnchor.js";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.js";
import BsLink from "../../nuxt/bslink.js";
export default defineComponent({
  name: "BsListItem",
  props: {
    ...AnchorProps,
    ...BlockProps,
    ...ActiveProps,
    ...ToggleProps,
    ...IDProps,
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const Anchor = useAnchor(props);
    const block = useBlock(props);
    const id = useID(props, "list-item");
    const toggle = useToggle(props, elementRef);
    const active = useActive(props, "list", elementRef);
    const spyItem = useScrollSpyItem(props, elementRef);
    const current = {
      class: computed(() => {
        return {
          "list-group-item": true,
          [`list-group-item-${props.theme}`]: props.theme
        };
      }),
      ref: elementRef
    };
    return () => h(
      BsLink,
      hProps(current, id, Anchor, block, active, toggle, spyItem),
      context.slots
    );
  }
});
