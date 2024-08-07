import { defineComponent, h } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  usePageItem,
  PageItemProps
} from "../../../composables/bootstrap/usePagination.js";
import { hProps } from "../../../utils/useProps.js";
export default defineComponent({
  name: "BsPageItem",
  props: {
    ...BlockProps,
    ...PageItemProps,
    tag: {
      type: String,
      default: "li"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const pageItemOptions = usePageItem(props);
    return () => h(props.tag, hProps(pageItemOptions, block), context.slots);
  }
});
