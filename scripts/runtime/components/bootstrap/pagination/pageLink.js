import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { usePageLink } from "../../../composables/bootstrap/usePagination.js";
import { hProps } from "../../../composables/utils/useProps.js";
import {
  AnchorProps,
  useAnchor
} from "../../../composables/html/useAnchor.js";
import BsLink from "../../nuxt/bslink.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsPageLink",
  props: {
    ...InlineProps,
    ...AnchorProps
  },
  setup(props, context) {
    const inline = useInline(props);
    const Anchor = useAnchor(props);
    const pageLink = usePageLink(props);
    return () => h(
      BsLink,
      hProps(
        pageLink,
        Anchor,
        inline
      ),
      context.slots
    );
  }
});
