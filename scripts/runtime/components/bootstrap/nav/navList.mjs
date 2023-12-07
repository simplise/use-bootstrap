import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { NavTabProps, useNavTab } from "../../../composables/bootstrap/useNavTab.mjs";
import {
  useItemsCurrent,
  CurrentProps
} from "../../../composables/bootstrap/useItemsCurrent.mjs";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../../composables/bootstrap/useScrollSpy.mjs";
export default defineComponent({
  name: "BsNavList",
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
      default: "ul"
      // ul , ol
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "nav-list");
    const navTab = useNavTab(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "nav");
    const spy = useScrollSpy(
      props,
      context,
      elementRef
      /*, "nav"*/
    );
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
