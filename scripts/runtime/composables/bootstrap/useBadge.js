import { addProp } from "../../composables/utils/useProps.js";
import {
  useVisuallyHiddenContent,
  VisuallyHiddenContentProps
} from "./useVisuallyHiddenContent.js";
import { computed } from "#imports";
import { includesPresets } from "../../composables/utils/usePresets.js";
export const BadgeProps = {
  ...VisuallyHiddenContentProps,
  rounded: {
    type: String
    // pill , circle
  },
  color: {
    type: String
    //
  }
};
export function useBadge(props) {
  const visuallyHidden = useVisuallyHiddenContent(props);
  const textBgIncludePreset = computed(() => includesPresets("text-bg-color", props.color));
  return {
    class: computed(() => {
      return {
        badge: true,
        [`rounded-${props.rounded}`]: props.rounded,
        [`text-bg-${props.color}`]: props.color && textBgIncludePreset.value
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.color && !textBgIncludePreset.value, "background-color", `var(--bs-${props.color})`),
        ...addProp(props.color && !textBgIncludePreset.value, "--bs-badge-color", `var(--bs-contrast-${props.color})`)
      };
    }),
    render: visuallyHidden.render
  };
}
