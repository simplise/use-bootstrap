import { computed } from "#imports";
export const ListItemProps = {
  inline: {
    type: Boolean
  }
};
export function useListItem(props) {
  return {
    class: computed(() => {
      return {
        "list-inline-item": props.inline
      };
    })
  };
}
