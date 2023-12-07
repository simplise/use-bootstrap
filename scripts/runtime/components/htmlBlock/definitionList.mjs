import { defineComponent, h } from "vue";
import { hProps } from "../../utils/useProps.mjs";
import { GridRowProps, useGridRow } from "../../composables/bootstrap/useGridRow.mjs";
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
