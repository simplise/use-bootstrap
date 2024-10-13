import { h } from "#imports";
import { Icon } from "#components";
export const NavbarTogglerProps = {
  icon: {
    type: String
  }
};
export function useNavbarToggler(props) {
  return {
    class: {
      "navbar-toggler": true
    },
    render: () => {
      if (props.icon) {
        return h(Icon, {
          name: props.icon
        });
      } else {
        return h("span", {
          class: {
            "navbar-toggler-icon": true
          }
        });
      }
    }
  };
}
