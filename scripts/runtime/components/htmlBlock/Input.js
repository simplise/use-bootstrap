import { defineComponent, h, ref } from "#imports";
import { hProps } from "../../utils/useProps.js";
import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import {
  InputModelProps,
  InputModelEmits,
  useInputModel
} from "../../composables/base/useInputModel.js";
export default defineComponent({
  name: "HtmlInput",
  props: {
    ...BlockProps,
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
    const block = useBlock(props);
    const inputModel = useInputModel(props, context.emit, elementRef);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(block, inputModel, current), context.slots);
  }
});
