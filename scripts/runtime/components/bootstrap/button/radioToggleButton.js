import { defineComponent, h, ref, computed } from "#imports";
import { addProp, hProps } from "../../../utils/useProps.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import {
  ButtonProps,
  useButton
} from "../../../composables/html/useButton.js";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.js";
import { useID, IDProps, useIDRef } from "../../../composables/attributes/useID.js";
export default defineComponent({
  name: "BsRadioToggleButton",
  props: {
    ...BlockProps,
    ...ButtonProps,
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
    const button = useButton(props);
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
