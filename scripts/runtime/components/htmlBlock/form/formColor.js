import { defineComponent, h, computed } from "#imports";
import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
import { useValid, ValidProps } from "../../../composables/bootstrap/useValid.js";
export default defineComponent({
  name: "BsFormColor",
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
          [`form-control-color`]: true,
          [`form-control`]: !props.readonly,
          [`form-control-${props.size}`]: props.size
        };
      }),
      attr: {
        type: "color"
      }
    };
    return () => h(props.tag, hProps(current, valid, inline), context.slots);
  }
});
