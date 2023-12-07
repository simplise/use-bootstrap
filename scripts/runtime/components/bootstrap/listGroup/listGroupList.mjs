import { defineComponent, h, computed, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, hasValue } from "../../../utils/useProps.mjs";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.mjs";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../../composables/bootstrap/useScrollSpy.mjs";
export default defineComponent({
  name: "BsListGroupList",
  props: {
    ...BlockProps,
    ...CurrentProps,
    ...ScrollSpyProps,
    numbered: {
      type: Boolean
    },
    flush: {
      type: Boolean
    },
    horizontal: {
      type: [Boolean, String],
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "list");
    const spy = useScrollSpy(props, context, elementRef);
    const current = {
      class: computed(() => {
        return {
          "list-group": true,
          "list-group-flush": props.flush,
          "list-group-numbered": props.numbered,
          [`list-group-horizontal${hasValue(props.horizontal) ? `-${props.horizontal}` : ""}`]: props.horizontal
        };
      }),
      ref: elementRef
    };
    return () => h(
      props.numbered ? "ol" : "ul",
      hProps(current, block, itemsCurrent, spy),
      context.slots
    );
  }
});
