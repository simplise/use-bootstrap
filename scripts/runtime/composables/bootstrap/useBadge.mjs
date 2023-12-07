import { computed } from "vue";
import {
  useVisuallyHiddenContent,
  VisuallyHiddenContentProps
} from "./useVisuallyHiddenContent.mjs";
export const BadgeProps = {
  ...VisuallyHiddenContentProps,
  rounded: {
    type: String
    // pill , circle
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
    render: visuallyHidden.render
  };
}
