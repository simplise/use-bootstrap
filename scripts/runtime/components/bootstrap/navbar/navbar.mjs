import { defineComponent, h, computed, ref } from "vue";
import { useBlock, BlockProps } from "../../../composables/base/useBlock.mjs";
import { hProps } from "../../../utils/useProps.mjs";
import { ActiveProps, useActive } from "../../../composables/bootstrap/useItemsActive.mjs";
import { IDProps, useID } from "../../../composables/attributes/useID.mjs";
import { ScrolledProps, useScrolled } from "../../../composables/extend/useScrolled.mjs";
export default defineComponent({
  name: "BsNavbar",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    ...ScrolledProps,
    tag: {
      type: String,
      default: "div"
    },
    expand: {
      type: [Boolean, String],
      // Empty , tabs , pills
      default: void 0
    },
    theme: {
      type: String,
      // light, dark
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "navbar");
    const elementRef = ref();
    const active = useActive(props, "collapse", elementRef);
    const scrolled = useScrolled(props);
    const current = {
      class: computed(() => {
        return {
          navbar: true,
          [`navbar-expand-${props.expand}`]: props.expand,
          [`navbar-${props.theme}`]: props.theme
        };
      }),
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, active, scrolled), context.slots);
  }
});
