import { defineComponent, h, ref } from "vue";
import {
  useFormControl,
  FormControlProps
} from "../../../composables/bootstrap/useFormControl.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.mjs";
export default defineComponent({
  name: "BsFormTextarea",
  props: {
    ...InlineProps,
    ...FormControlProps,
    ...ValidProps,
    ...InputModelProps,
    tag: {
      type: String,
      default: "textarea"
    }
  },
  emits: [
    ...InputModelEmits
  ],
  setup(props, context) {
    const elementRef = ref();
    const inline = useInline(props);
    const formControl = useFormControl(props);
    const valid = useValid(props);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(formControl, valid, inline, inputModel, current), context.slots);
  }
});
