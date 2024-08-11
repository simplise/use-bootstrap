import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, exposeMethods } from "../../../utils/useProps.js";
import { useFadeShow, FadeShowProps } from "../../../composables/bootstrap/useFadeShow.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsToast",
  props: {
    ...BlockProps,
    ...FadeShowProps,
    ...IDProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "toast");
    const showFade = useFadeShow(props, context, elementRef, "toast", {
      enabled: true
    });
    exposeMethods(context, showFade, block);
    const current = {
      class: {
        toast: true
      },
      attr: {
        "role": "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, showFade), context.slots);
  }
});
