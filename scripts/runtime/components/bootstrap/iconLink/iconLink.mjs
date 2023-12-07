import { defineComponent, h, ref } from "vue";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import {
  useAnchorButton,
  AnchorButtonProps
} from "../../../composables/html/useAnchorButton.mjs";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.mjs";
import { Icon } from "#components";
export default defineComponent({
  name: "BsIconLink",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    tag: {
      type: String,
      default: "button"
    },
    toggle: {
      type: String,
      default: "collapse"
    },
    icon: {
      type: String,
      default: void 0
    },
    iconEnd: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const current = {
      class: {
        "icon-link": true
      },
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, anchorButton, block),
      [
        !props.iconEnd ? h(Icon, { name: props.icon }) : void 0,
        ...hSlots(context.slots.default),
        props.iconEnd ? h(Icon, { name: props.icon }) : void 0
      ]
    );
  }
});
