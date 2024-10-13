import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, addProp } from "../../../composables/utils/useProps.js";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.js";
import { IDProps, useID } from "../../../composables/attributes/useID.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import { defineComponent, h, ref, computed } from "#imports";
import { includesPresets } from "../../../composables/utils/usePresets.js";
export default defineComponent({
  name: "BsListItem",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "li"
    },
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "list-group-item");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const toggle = useToggle(props, elementRef);
    const textBgIncludePreset = computed(() => includesPresets("text-bg-color", props.color));
    const current = {
      class: {
        "list-group-item": true,
        [`list-group-item-${props.color}`]: props.color && textBgIncludePreset.value
      },
      style: computed(() => {
        return {
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-border-color", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-action-hover-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-action-active-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-active-bg", `var(--bs-${props.color})`),
          ...addProp(props.color && !textBgIncludePreset.value, "--bs-list-group-active-border-color", `var(--bs-${props.color})`),
          // ...addProp(!props.textColor && props.color, "--bs-list-group-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-list-group-action-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-list-group-action-hover-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-list-group-action-active-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color && !textBgIncludePreset.value, "--bs-list-group-active-color", `var(--bs-contrast-${props.color})`)
        };
      }),
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, id, block, active, toggle), context.slots);
  }
});
