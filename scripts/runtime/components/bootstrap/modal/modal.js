import { defineComponent, h, ref } from "#imports";
import { Teleport } from "vue";
import { hProps, hSlots, exposeMethods } from "../../../utils/useProps.js";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { useAreaLabelledby } from "../../../composables/attributes/useAreaLabel.js";
import { useModal, ModalProps } from "../../../composables/bootstrap/useModal.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
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
    exposeMethods(context, modal, block);
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
