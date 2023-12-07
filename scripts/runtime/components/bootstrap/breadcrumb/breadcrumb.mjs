import { defineComponent, h } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, addProp } from "../../../utils/useProps.mjs";
const defaultDivider = "/";
export default defineComponent({
  name: "BsBreadcrumb",
  props: {
    ...BlockProps,
    divider: {
      type: String,
      default: defaultDivider
    },
    dividerUrl: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "nav"
    },
    pill: {
      type: Boolean
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      attr: {
        "aria-label": "breadcrumb"
      },
      style: {
        ...addProp(
          props.divider != defaultDivider,
          "--bs-breadcrumb-divider",
          `'${props.divider}'`
        ),
        ...addProp(
          props.dividerUrl,
          "--bs-breadcrumb-divider",
          `url("${props.dividerUrl}")`
        )
      }
    };
    return () => h(
      props.tag,
      hProps(current, block),
      h(
        "ol",
        {
          class: {
            breadcrumb: true,
            [`breadcrumb-${props.theme}`]: props.theme
          }
        },
        context.slots
      )
    );
  }
});
