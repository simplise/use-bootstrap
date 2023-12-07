import { defineComponent, h } from "vue";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsNavbarText",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const current = {
      class: {
        "navbar-text": true
      }
    };
    return () => h(props.tag, hProps(current, inline), context.slots);
  }
});
