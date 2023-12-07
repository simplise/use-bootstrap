import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.mjs";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../../composables/bootstrap/useScrollSpy.mjs";
export default defineComponent({
  name: "BsListGroup",
  props: {
    ...BlockProps,
    ...CurrentProps,
    ...ScrollSpyProps,
    tag: {
      type: String,
      default: "div"
    },
    row: {
      type: Boolean,
      default: true
    },
    flush: {
      type: Boolean
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "list");
    const spy = useScrollSpy(
      props,
      context,
      elementRef
      /*, "list"*/
    );
    const current = {
      class: {
        "list-group": true,
        "list-group-flush": props.flush
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, itemsCurrent, spy), context.slots);
  }
});
