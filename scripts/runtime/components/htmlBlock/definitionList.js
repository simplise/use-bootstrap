import { hProps } from "../../utils/useProps.js";
import { GridRowProps, useGridRow } from "../../composables/bootstrap/useGridRow.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "HtmlDefinitionList",
  props: {
    ...GridRowProps,
    row: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: "dl"
    }
  },
  setup(props, context) {
    const block = useGridRow(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
