import { hProps, hSlots, exposeMethods } from "../../../composables/utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { useAreaLabelledby } from "../../../composables/attributes/useAreaLabel.js";
import { useModal, ModalProps } from "../../../composables/bootstrap/useModal.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsModal",
  props: {
    ...BlockProps,
    ...IDProps,
    ...ModalProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["hide", "hidden", "show", "shown"],
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "model");
    const modal = useModal(props, context, elementRef);
    const areaLabelled = useAreaLabelledby(props, elementRef);
    exposeMethods(context, modal, block);
    const current = {
      ref: elementRef
    };
    return () => h(
      "div",
      {
        to: "body"
      },
      [
        h(
          props.tag,
          hProps(current, modal, areaLabelled, block, id),
          hSlots(context.slots.default)
        ),
        modal.render()
      ]
    );
  }
});
