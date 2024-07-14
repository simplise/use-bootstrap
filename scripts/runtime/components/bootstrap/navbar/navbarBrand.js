import { defineComponent, h } from "#imports";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
import {
  AnchorProps,
  useAnchor
} from "../../../composables/html/useAnchor.js";
import BsLink from "../../nuxt/bslink.js";
export default defineComponent({
  name: "BsNavbarBrand",
  props: {
    ...InlineProps,
    ...AnchorProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const Anchor = useAnchor(props);
    const current = {
      class: {
        "navbar-brand": true
      }
    };
    return () => h(
      BsLink,
      hProps(
        current,
        Anchor,
        inline
      ),
      context.slots
    );
  }
});
