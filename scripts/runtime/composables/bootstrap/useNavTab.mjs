import { computed } from "vue";
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
  }
};
export function useNavTab(props) {
  return {
    class: computed(() => {
      return {
        [`nav-${props.nav}`]: props.nav,
        "nav-fill": props.fill,
        "nav-justified": props.justified
      };
    })
  };
}
