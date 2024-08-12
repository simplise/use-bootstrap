import { computed } from "#imports";
export const ListProps = {
  inline: {
    type: Boolean
  },
  unstyled: {
    type: Boolean
  }
};
export function useList(props) {
  return {
    class: computed(() => {
      return {
        "list-unstyled": props.unstyled,
        "list-inline": props.inline
      };
    })
  };
}
