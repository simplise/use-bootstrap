import { useInline, InlineProps } from "../../../composables/base/useInline.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
export default defineComponent({
  name: "BsColFormLabel",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "label"
    },
    size: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const current = {
      class: computed(() => {
        return {
          "col-form-label": true,
          [`col-form-label-${props.size}`]: props.size
        };
      })
    };
    return () => h(props.tag, hProps(current, inline), context.slots);
  }
});
