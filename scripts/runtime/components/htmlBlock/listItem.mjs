import { defineComponent, h, ref } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useListItem, ListItemProps } from "../../composables/html/useListItem.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
import { ActiveProps, useActive } from "../../composables/bootstrap/useItemsActive.mjs";
import { IDProps, useID } from "../../composables/attributes/useID.mjs";
import { ToggleProps, useToggle } from "../../composables/bootstrap/useToggle.mjs";
export default defineComponent({
  name: "HtmlListItem",
  props: {
    ...BlockProps,
    ...ListItemProps,
    ...ActiveProps,
    ...IDProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "li"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const listItem = useListItem(props);
    const id = useID(props, "list-item");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const toggle = useToggle(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(id, listItem, block, active, toggle, current), context.slots);
  }
});
