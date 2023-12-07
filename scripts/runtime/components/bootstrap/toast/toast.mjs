import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { useFadeShow, FadeShowProps } from "../../../composables/bootstrap/useFadeShow.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
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
    const current = {
      class: {
        toast: true
      },
      attr: {
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, showFade), context.slots);
  }
});
