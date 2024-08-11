import {
  AnchorProps,
  useAnchor
} from "../../../composables/html/useAnchor.js";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { hProps } from "../../../utils/useProps.js";
import BsLink from "../../nuxt/bslink.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsCardLink",
  props: {
    ...InlineProps,
    ...AnchorProps,
    tag: {
      type: String,
      default: "a"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const Anchor = useAnchor(props);
    const current = {
      class: {
        "card-link": true
      }
    };
    return () => h(
      BsLink,
      hProps(current, Anchor, inline),
      context.slots
    );
  }
});
