import { defineComponent, h, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import { FadeShowProps, useFadeShow } from "../../../composables/bootstrap/useFadeShow.mjs";
export default defineComponent({
  name: "BsTabPane",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    ...FadeShowProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "tab-pane");
    const active = useActive(props, "tab", elementRef);
    const fade = useFadeShow(props, context, elementRef, "tab");
    const current = {
      class: {
        "tab-pane": true
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, active, fade), context.slots);
  }
});
