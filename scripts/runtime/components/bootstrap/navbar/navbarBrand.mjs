import { defineComponent, h } from "vue";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import BsLink from "../../nuxt/bslink.mjs";
export default defineComponent({
  name: "BsNavbarBrand",
  props: {
    ...InlineProps,
    ...AnchorButtonProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const anchorButton = useAnchorButton(props);
    const current = {
      class: {
        "navbar-brand": true
      }
    };
    return () => h(
      BsLink,
      hProps(
        current,
        anchorButton,
        inline
      ),
      context.slots
    );
  }
});
