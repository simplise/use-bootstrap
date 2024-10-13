import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { NavTabProps, useNavTab } from "../../../composables/bootstrap/useNavTab.js";
import {
  useItemsCurrent,
  CurrentProps
} from "../../../composables/bootstrap/useItemsCurrent.js";
import { hProps, hSlots } from "../../../composables/utils/useProps.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../../composables/bootstrap/useScrollSpy.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsNav",
  props: {
    ...BlockProps,
    ...NavTabProps,
    ...CurrentProps,
    ...IDProps,
    ...ScrollSpyProps,
    parent: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: "nav"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const navTab = useNavTab(props);
    const id = useID(props, "nav");
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "nav");
    const spy = useScrollSpy(props, context, elementRef);
    const current = {
      class: {
        nav: true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(current, navTab, itemsCurrent, block, id, spy),
      hSlots(context.slots.default)
    );
  }
});
