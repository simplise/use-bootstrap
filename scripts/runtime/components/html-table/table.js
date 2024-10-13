import { useBlock, BlockProps } from "../../composables/base/useBlock.js";
import { hProps, hasValue, addProp } from "../../composables/utils/useProps.js";
import { defineComponent, h, computed } from "#imports";
export default defineComponent({
  name: "HtmlTable",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "table"
    },
    color: {
      type: String,
      default: void 0
    },
    striped: {
      type: Boolean
    },
    hover: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    bordered: {
      type: Boolean
    },
    borderless: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    caption: {
      type: String,
      default: void 0
    },
    responsive: {
      type: [Boolean, String],
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          table: true,
          [`table-${props.color}`]: props.color,
          [`table-striped`]: props.striped,
          [`table-hover`]: props.hover,
          [`table-active`]: props.active,
          [`table-bordered`]: props.bordered,
          [`table-borderless`]: props.borderless,
          [`table-sm`]: props.small,
          [`caption-${props.caption}`]: props.caption
        };
      }),
      style: computed(() => {
        return {
          ...addProp(props.backgroundColor, "--bs-table-bg", `var(--bs-${props.backgroundColor})`),
          ...addProp(props.backgroundColor, "--bs-table-color", `var(--bs-contrast-${props.backgroundColor})`)
        };
      })
    };
    return () => {
      if (props.responsive) {
        return h(
          "div",
          {
            class: {
              [`table-responsive${hasValue(props.responsive) ? `-${props.responsive}` : ""}`]: props.responsive
            }
          },
          h(
            props.tag,
            {
              ...context.attrs,
              ...hProps(current, block)
            },
            context.slots
          )
        );
      } else {
        return h(
          props.tag,
          {
            ...context.attrs,
            ...hProps(current, block)
          },
          context.slots
        );
      }
    };
  }
});
