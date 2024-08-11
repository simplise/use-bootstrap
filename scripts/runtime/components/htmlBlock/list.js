import { hProps } from "../../utils/useProps.js";
import { useList, ListProps } from "../../composables/html/useList.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { IDProps, useID } from "../../composables/attributes/useID.js";
import {
  CurrentProps,
  useItemsCurrent
} from "../../composables/bootstrap/useItemsCurrent.js";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../composables/bootstrap/useScrollSpy.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "HtmlList",
  props: {
    ...BlockProps,
    ...ListProps,
    ...CurrentProps,
    ...IDProps,
    ...ScrollSpyProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const list = useList(props);
    const id = useID(props, "list");
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "list");
    const spy = useScrollSpy(
      props,
      context,
      elementRef
      /* , "list" */
    );
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(id, list, block, itemsCurrent, spy, current), context.slots);
  }
});
