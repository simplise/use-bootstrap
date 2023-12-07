import { defineComponent, h, ref } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../../composables/base/useInputModel.mjs";
export default defineComponent({
  name: "BsFormRange",
  props: {
    ...InlineProps,
    ...ValidProps,
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
    const valid = useValid(props);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const current = {
      ref: elementRef,
      class: {
        [`form-range`]: true
      },
      attr: {
        type: "range"
      }
    };
    return () => h(props.tag, hProps(current, valid, inline, inputModel), context.slots);
  }
});
