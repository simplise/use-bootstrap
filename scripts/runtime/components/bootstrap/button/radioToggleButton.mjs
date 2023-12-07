import { defineComponent, h, ref, computed } from "vue";
import { addProp, hProps } from "../../../utils/useProps.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.mjs";
import { useID, IDProps, useIDRef } from "../../../composables/attributes/useID.mjs";
export default defineComponent({
  name: "BsRadioToggleButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...IDProps,
    ...InputModelProps,
    button: {
      type: [String, Boolean],
      default: true
    }
  },
  emits: [
    ...InputModelEmits
  ],
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const button = useAnchorButton(props);
    const id = useID(props, "radio-toggle-button");
    const eid = useIDRef(props, elementRef);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const radio = {
      ref: elementRef,
      class: {
        [`btn-check`]: true
      },
      attr: {
        type: "radio",
        autocomplete: "off",
        ...addProp(props.disabled, "disabled", "disabled")
      }
    };
    const label = {
      attr: computed(() => {
        return {
          for: eid.value
        };
      })
    };
    return () => [
      h(
        "input",
        {
          ...context.attrs,
          ...hProps(radio, id, inputModel)
        }
      ),
      h("label", hProps(label, button, block), context.slots)
    ];
  }
});
