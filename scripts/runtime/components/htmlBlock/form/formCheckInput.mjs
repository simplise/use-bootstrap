import { defineComponent, h, inject, ref, onMounted } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { useFormItem } from "../../../composables/bootstrap/useFormLabel.mjs";
import { IDProps } from "../../../composables/attributes/useID.mjs";
import { addProp, hProps } from "../../../utils/useProps.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.mjs";
export default defineComponent({
  name: "BsFormCheckInput",
  props: {
    ...InlineProps,
    ...IDProps,
    ...ValidProps,
    ...InputModelProps,
    tag: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "checkbox"
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    ...InputModelEmits
  ],
  setup(props, context) {
    const elementRef = ref();
    const inline = useInline(props);
    const formItem = useFormItem(props);
    const valid = useValid(props);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const isSwitch = inject("switch", false);
    const current = {
      ref: elementRef,
      class: {
        [`form-check-input`]: true
      },
      attr: {
        type: props.type,
        ...addProp(isSwitch, "role", "switch")
      }
    };
    if (props.indeterminate) {
      onMounted(() => {
        if (elementRef.value instanceof HTMLInputElement) {
          elementRef.value.indeterminate = true;
        }
      });
    }
    return () => h(props.tag, hProps(current, formItem, valid, inline, inputModel), context.slots);
  }
});
