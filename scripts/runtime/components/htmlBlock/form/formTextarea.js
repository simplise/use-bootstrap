import { defineComponent, h, ref } from "#imports";
import {
  useFormControl,
  FormControlProps
} from "../../../composables/bootstrap/useFormControl.js";
import { hProps } from "../../../utils/useProps.js";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.js";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.js";
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
