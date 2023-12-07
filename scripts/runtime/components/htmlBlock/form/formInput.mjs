import { defineComponent, h, ref } from "vue";
import {
  useFormControl,
  FormControlProps
} from "../../../composables/bootstrap/useFormControl.mjs";
import { useFormItem } from "../../../composables/bootstrap/useFormLabel.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
import { IDProps } from "../../../composables/attributes/useID.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.mjs";
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
