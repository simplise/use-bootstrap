import { defineComponent, h, ref, computed } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import { useScrollSpyItem } from "../../../composables/bootstrap/useScrollSpyItem.mjs";
export default defineComponent({
  name: "BsListItem",
  props: {
    ...AnchorButtonProps,
    ...BlockProps,
    ...ActiveProps,
    ...ToggleProps,
    ...IDProps,
    tag: {
      type: String,
      default: "a"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const anchorButton = useAnchorButton(props);
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
      props.tag,
      hProps(current, id, anchorButton, block, active, toggle, spyItem),
      context.slots
    );
  }
});
