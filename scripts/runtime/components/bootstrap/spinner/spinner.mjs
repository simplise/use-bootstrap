import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import span from "../../htmlInline/inline.mjs";
export default defineComponent({
  name: "BsSpinner",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    spinner: {
      type: String,
      default: "border"
      // grow
    },
    sm: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        [`spinner-${props.spinner}`]: true,
        [`spinner-${props.spinner}-sm`]: props.sm
      },
      attr: {
        role: "status"
      }
    };
    return () => h(
      props.tag,
      hProps(current, block),
      () => [
        () => h(span, { visuallyHidden: true }, "Loading..."),
        ...hSlots(context.slots.default)
      ]
    );
  }
});
