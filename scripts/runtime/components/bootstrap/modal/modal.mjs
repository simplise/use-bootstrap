import { defineComponent, h, ref, Teleport } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { useAreaLabelledby } from "../../../composables/attributes/useAreaLabel.mjs";
import { useModal, ModalProps } from "../../../composables/bootstrap/useModal.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
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
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "model");
    const modal = useModal(props, context, elementRef);
    const areaLabelled = useAreaLabelledby(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      Teleport,
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
