import { defineComponent, h, ref } from "#imports";
import {
  useFormControl,
  FormControlProps
} from "../../../composables/bootstrap/useFormControl.js";
import { useFormItem } from "../../../composables/bootstrap/useFormLabel.js";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.js";
import { IDProps } from "../../../composables/attributes/useID.js";
import { hProps } from "../../../utils/useProps.js";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.js";
export default defineComponent({
  name: "BsFormInput",
  props: {
    ...InlineProps,
    ...FormControlProps,
    ...IDProps,
    ...ValidProps,
    // ...AnchorButtonProps,
    ...InputModelProps,
    tag: {
      type: String,
      default: "input"
    }
  },
  emits: [
    ...InputModelEmits
  ],
  setup(props, context) {
    const elementRef = ref();
    const inline = useInline(props);
    const formControl = useFormControl(props);
    const formItem = useFormItem(props);
    const valid = useValid(props);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(
        formControl,
        formItem,
        valid,
        /*button,*/
        inline,
        inputModel,
        current
      )
    );
  }
});
