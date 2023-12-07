import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import {
  useGridContainer,
  GridContainerProps
} from "../../../composables/bootstrap/useGridContainer.mjs";
export default defineComponent({
  name: "BsGridContainer",
  props: {
    ...GridContainerProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const gridContainer = useGridContainer(props);
    return () => h(props.tag, hProps(gridContainer), context.slots);
  }
});
