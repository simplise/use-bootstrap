import { defineComponent, h } from "vue";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { usePageLink } from "../../../composables/bootstrap/usePagination.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import {
  AnchorButtonProps,
  useAnchorButton
} from "../../../composables/html/useAnchorButton.mjs";
import BsLink from "../../nuxt/bslink.mjs";
export default defineComponent({
  name: "BsPageLink",
  props: {
    ...InlineProps,
    ...AnchorButtonProps
  },
  setup(props, context) {
    const inline = useInline(props);
    const anchorButton = useAnchorButton(props);
    const pageLink = usePageLink(props);
    return () => h(
      BsLink,
      hProps(
        pageLink,
        anchorButton,
        inline
      ),
      context.slots
    );
  }
});
