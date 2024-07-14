import { defineComponent, h } from "#imports";
import { hProps } from "../../../utils/useProps.js";
import {
  useGridContainer,
  GridContainerProps
} from "../../../composables/bootstrap/useGridContainer.js";
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
