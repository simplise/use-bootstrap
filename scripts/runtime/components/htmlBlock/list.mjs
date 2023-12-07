import { defineComponent, h, ref } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { useList, ListProps } from "../../composables/html/useList.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
import { IDProps, useID } from "../../composables/attributes/useID.mjs";
import {
  CurrentProps,
  useItemsCurrent
} from "../../composables/bootstrap/useItemsCurrent.mjs";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../composables/bootstrap/useScrollSpy.mjs";
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
      /*, "list"*/
    );
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(id, list, block, itemsCurrent, spy, current), context.slots);
  }
});
