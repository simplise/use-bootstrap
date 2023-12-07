import { computed } from "vue";
import { BlockProps, useBlock } from "../../composables/base/useBlock.mjs";
export const GridContainerProps = {
  ...BlockProps,
  type: {
    type: String
    // fluid , {breakpoint}
  }
};
export function useGridContainer(props) {
  const block = useBlock(props);
  return {
    class: computed(() => {
      return {
        [`container-${props.type}`]: props.type,
        container: !props.type,
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
