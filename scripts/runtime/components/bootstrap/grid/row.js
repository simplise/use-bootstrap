import { hProps } from "../../../composables/utils/useProps.js";
import { GridRowProps, useGridRow } from "../../../composables/bootstrap/useGridRow.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsGridRow",
  props: {
    ...GridRowProps,
    tag: {
      type: String,
      default: "div"
    },
    row: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const gridRow = useGridRow(props);
    return () => h(props.tag, hProps(gridRow), context.slots);
  }
});
