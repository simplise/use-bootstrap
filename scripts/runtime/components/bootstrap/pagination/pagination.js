import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import {
  usePagination,
  PaginationProps
} from "../../../composables/bootstrap/usePagination.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsPagination",
  props: {
    ...BlockProps,
    ...PaginationProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const paginationOptions = usePagination(props);
    return () => h(props.tag, hProps(paginationOptions, block), context.slots);
  }
});
