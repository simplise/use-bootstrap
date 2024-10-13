import { computed } from "#imports";
export const NavTabProps = {
  nav: {
    type: String
    // Empty , tabs , pills
  },
  fill: {
    type: Boolean
  },
  justified: {
    type: Boolean
  },
  card: {
    type: Boolean
  }
};
export function useNavTab(props) {
  return {
    class: computed(() => {
      return {
        [`nav-${props.nav}`]: props.nav,
        "nav-fill": props.fill,
        "nav-justified": props.justified,
        "card-header-tabs": props.card
      };
    })
  };
}
