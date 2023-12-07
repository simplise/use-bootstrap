import { computed } from "vue";
import { addClassNames } from "../../utils/useProps.mjs";
import { isString } from "../../utils/helpers.mjs";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
export const GridRowProps = {
  ...BlockProps,
  auto: {
    type: Boolean
  },
  columns: {
    type: String
  },
  align: {
    type: String
  },
  rowreverse: {
    type: [Boolean]
  },
  gutter: {
    type: [Number, String]
  }
};
export function useGridRow(props) {
  const block = useBlock(props);
  return {
    class: computed(() => {
      return {
        row: props.row,
        "row-cols-auto": props.auto,
        "flex-row-reverse": props.rowreverse,
        [`align-${props.align}`]: props.align,
        ...addClassNames(props.columns, (n) => `row-cols-${n}`),
        ...addClassNames(
          props.gutter,
          (n) => `g${isString(props.gutter) && ["x", "y"].indexOf(n.substring(0, 1)) > -1 ? `${n}` : `-${n}`}`
        ),
        ...block.class.value
      };
    }),
    style: computed(() => {
      return {
        ...block.style.value
      };
    })
  };
}
