import { computed } from "vue";
import { addProp } from "../../utils/useProps.js";
import {
  useVisuallyHiddenContent,
  VisuallyHiddenContentProps
} from "./useVisuallyHiddenContent.js";
export const BadgeProps = {
  ...VisuallyHiddenContentProps,
  rounded: {
    type: String
    // pill , circle
  },
  colorGenerate: {
    type: Boolean
  }
};
export function useBadge(props) {
  const visuallyHidden = useVisuallyHiddenContent(props);
  return {
    class: computed(() => {
      return {
        badge: true,
        [`rounded-${props.rounded}`]: props.rounded
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.colorGenerate, "--bs-badge-color", `var(--bs-contrast-${props.backgroundColor})`)
      };
    }),
    render: visuallyHidden.render
  };
}
