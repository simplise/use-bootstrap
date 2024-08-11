import { hProps } from "../../../utils/useProps.js";
import { useAreaLabel } from "../../../composables/attributes/useAreaLabel.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { useID, IDProps } from "../../../composables/attributes/useID.js";
import { defineComponent, h, ref } from "#imports";
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
