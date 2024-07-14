import { defineComponent, h, computed, ref } from "#imports";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, hasValue, addProp } from "../../../utils/useProps.js";
import {
  CurrentProps,
  useItemsCurrent
} from "../../../composables/bootstrap/useItemsCurrent.js";
import {
  ScrollSpyProps,
  useScrollSpy
} from "../../../composables/bootstrap/useScrollSpy.js";
export default defineComponent({
  name: "BsListGroupList",
  props: {
    ...BlockProps,
    ...CurrentProps,
    ...ScrollSpyProps,
    numbered: {
      type: Boolean
    },
    flush: {
      type: Boolean
    },
    horizontal: {
      type: [Boolean, String],
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "list");
    const spy = useScrollSpy(props, context, elementRef);
    const current = {
      class: computed(() => {
        return {
          "list-group": true,
          "list-group-flush": props.flush,
          "list-group-numbered": props.numbered,
          [`list-group-horizontal${hasValue(props.horizontal) ? `-${props.horizontal}` : ""}`]: props.horizontal
        };
      }),
      style: computed(() => {
        return {
          // ...addProp(props.color, "--bs-list-group-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-list-group-border-color", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-list-group-action-hover-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-list-group-action-active-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-list-group-active-bg", `var(--bs-${props.color})`),
          ...addProp(props.color, "--bs-list-group-active-border-color", `var(--bs-${props.color})`),
          //...addProp(!props.textColor && props.color, "--bs-list-group-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-list-group-action-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-list-group-action-hover-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-list-group-action-active-color", `var(--bs-contrast-${props.color})`),
          ...addProp(!props.textColor && props.color, "--bs-list-group-active-color", `var(--bs-contrast-${props.color})`)
        };
      }),
      ref: elementRef
    };
    return () => h(
      props.numbered ? "ol" : "ul",
      hProps(current, block, itemsCurrent, spy),
      context.slots
    );
  }
});
