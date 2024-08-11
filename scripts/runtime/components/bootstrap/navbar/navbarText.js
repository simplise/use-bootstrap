import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
import { defineComponent, h } from "#imports";
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
