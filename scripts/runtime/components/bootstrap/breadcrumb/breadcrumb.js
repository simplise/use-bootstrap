import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps, addProp } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
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
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const navArea = {
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
    const breadcrumbCurrent = {
      class: {
        breadcrumb: true,
        [`breadcrumb-${props.color}`]: props.color
      }
    };
    return () => h(
      props.tag,
      hProps(navArea),
      h(
        "ol",
        hProps(breadcrumbCurrent, block),
        context.slots
      )
    );
  }
});
