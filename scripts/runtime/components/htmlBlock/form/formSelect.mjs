import { defineComponent, h, computed, ref } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { addProp, hProps } from "../../../utils/useProps.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
import {
  SelectModelProps,
  SelectModelEmits,
  useSelectModel
} from "../../../composables/base/useSelectModel.mjs";
export default defineComponent({
  name: "FormSelect",
  props: {
    ...InlineProps,
    ...ValidProps,
    ...SelectModelProps,
    tag: {
      type: String,
      default: "select"
    },
    size: {
      type: String,
      default: void 0
    },
    length: {
      type: [Number, String],
      default: void 0
    }
  },
  emits: [
    ...SelectModelEmits
  ],
  setup(props, context) {
    const elementRef = ref();
    const inline = useInline(props);
    const valid = useValid(props);
    const selectModel = useSelectModel(props, context.emit, elementRef);
    const current = {
      ref: elementRef,
      class: computed(() => {
        return {
          [`form-select`]: true,
          [`form-select-${props.size}`]: props.size
        };
      }),
      attr: computed(() => {
        return {
          ...addProp(props.length, "size", `${props.length}`)
        };
      })
    };
    return () => h(props.tag, hProps(current, valid, inline, selectModel), context.slots);
  }
});
