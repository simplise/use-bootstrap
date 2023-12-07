import { defineComponent, h } from "vue";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import BsLink from "../../nuxt/bslink.mjs";
export default defineComponent({
  name: "BsAlertLink",
  props: {
    ...InlineProps,
    ...AnchorButtonProps,
    tag: {
      type: String,
      default: "a"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const anchorButton = useAnchorButton(props);
    const current = {
      class: {
        "alert-link": true
      }
    };
    return () => h(BsLink, hProps(current, anchorButton, inline), context.slots);
  }
});
