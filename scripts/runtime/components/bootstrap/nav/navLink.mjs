import { defineComponent, h, ref } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import {
  TabActiveProps,
  useTabActive
} from "../../../composables/bootstrap/useTabActive.mjs";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import BsLink from "../../nuxt/bslink.mjs";
export default defineComponent({
  name: "BsNavLink",
  props: {
    ...AnchorButtonProps,
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
    const anchorButton = useAnchorButton(props);
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
        anchorButton,
        block,
        spyItem,
        tab,
        current
      ),
      () => hSlots(context.slots.default)
    );
  }
});
