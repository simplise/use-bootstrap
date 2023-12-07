import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { NavTabProps, useNavTab } from "../../../composables/bootstrap/useNavTab.mjs";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsNavbarNav",
  props: {
    ...BlockProps,
    ...NavTabProps,
    ...CurrentProps,
    ...IDProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "navbar-nav-list");
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "nav");
    const navTab = useNavTab(props);
    const current = {
      class: {
        "navbar-nav": true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(current, itemsCurrent, navTab, block, id),
      context.slots
    );
  }
});
