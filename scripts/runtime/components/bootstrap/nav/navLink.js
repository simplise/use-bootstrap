import { defineComponent, h, ref } from "#imports";
import { hProps, hSlots } from "../../../utils/useProps.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import {
  TabActiveProps,
  useTabActive
} from "../../../composables/bootstrap/useTabActive.js";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.js";
import {
  AnchorProps,
  useAnchor
} from "../../../composables/html/useAnchor.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import BsLink from "../../nuxt/bslink.js";
export default defineComponent({
  name: "BsNavLink",
  props: {
    ...AnchorProps,
    ...BlockProps,
    ...IDProps,
    ...ActiveProps,
    ...TabActiveProps,
    tag: {
      type: String,
      default: "a"
    },
    toggle: {
      type: String,
      default: "nav"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const Anchor = useAnchor(props);
    const block = useBlock(props);
    const id = useID(props, "nav-link");
    const active = useActive(props, "nav", elementRef);
    const spyItem = useScrollSpyItem(props, elementRef);
    const tab = useTabActive(props, elementRef);
    const current = {
      class: {
        "nav-link": true
      },
      ref: elementRef
    };
    return () => h(
      BsLink,
      hProps(
        id,
        active,
        Anchor,
        block,
        spyItem,
        tab,
        current
      ),
      () => hSlots(context.slots.default)
    );
  }
});
