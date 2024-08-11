import { hProps } from "../../utils/useProps.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { useDirective } from "../../composables/directive/useDirective.js";
import { defineComponent, h, ref, onMounted } from "#imports";
import { Icon } from "#components";
export default defineComponent({
  name: "BsIcon",
  props: {
    ...BlockProps,
    icon: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    const elementRef = ref();
    const block = useBlock(props);
    const current = {
      attr: {
        name: props.icon
      },
      style: {
        "vertical-align": "-.125em"
        // https://icons.getbootstrap.com/
      },
      ref: elementRef
    };
    onMounted(() => {
      useDirective(elementRef.value);
    });
    return () => h(
      Icon,
      hProps(current, block),
      void 0
    );
  }
});
