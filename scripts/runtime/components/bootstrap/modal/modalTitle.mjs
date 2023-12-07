import { defineComponent, h, ref } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { useAreaLabel } from "../../../composables/attributes/useAreaLabel.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import { useID, IDProps } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsModalTitle",
  props: {
    ...BlockProps,
    ...IDProps,
    level: {
      type: Number,
      default: 5
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "modal-title");
    const areaLabel = useAreaLabel(props, elementRef);
    const current = {
      class: {
        "modal-title": true
      },
      ref: elementRef
    };
    return () => h(`h${props.level}`, hProps(current, block, id, areaLabel), context.slots);
  }
});
