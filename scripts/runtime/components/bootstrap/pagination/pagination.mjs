import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import {
  usePagination,
  PaginationProps
} from "../../../composables/bootstrap/usePagination.mjs";
import { hProps } from "../../../utils/useProps.mjs";
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
