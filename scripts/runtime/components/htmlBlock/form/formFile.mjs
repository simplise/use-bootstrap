import { defineComponent, h, computed } from "vue";
import { useInline, InlineProps } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.mjs";
export default defineComponent({
  name: "BsFormFile",
  props: {
    ...InlineProps,
    ...ValidProps,
    tag: {
      type: String,
      default: "input"
    },
    size: {
      type: String,
      //sm, lg
      default: void 0
    },
    readonly: {
      type: Boolean
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const valid = useValid(props);
    const current = {
      class: computed(() => {
        return {
          [`form-control`]: !props.readonly,
          [`form-control-${props.size}`]: props.size
        };
      }),
      attr: {
        type: "file"
      }
    };
    return () => h(props.tag, hProps(current, valid, inline), context.slots);
  }
});
