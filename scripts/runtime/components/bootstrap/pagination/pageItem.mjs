import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  usePageItem,
  PageItemProps
} from "../../../composables/bootstrap/usePagination.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
