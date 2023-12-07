import { defineComponent, h } from "vue";
import { hProps } from "../../../utils/useProps.mjs";
import { GridRowProps, useGridRow } from "../../../composables/bootstrap/useGridRow.mjs";
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
