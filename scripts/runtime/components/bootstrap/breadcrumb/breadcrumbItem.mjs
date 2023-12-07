import { defineComponent, h, computed } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps, addProp } from "../../../utils/useProps.mjs";
export default defineComponent({
  name: "BsBreadcrumbItem",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          "breadcrumb-item": true,
          active: props.active
        };
      }),
      attr: {
        ...addProp(props.active, "aria-current", "page")
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
