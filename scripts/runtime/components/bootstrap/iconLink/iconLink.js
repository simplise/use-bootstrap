import { hProps, hSlots } from "../../../composables/utils/useProps.js";
import {
  useAnchor,
  AnchorProps
} from "../../../composables/html/useAnchor.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import BsLink from "../../nuxt/bslink.js";
import { Icon } from "#components";
import { defineComponent, h, ref } from "#imports";
export default defineComponent({
  name: "BsIconLink",
  props: {
    ...BlockProps,
    ...AnchorProps,
    tag: {
      type: String,
      default: "a"
    },
    icon: {
      type: String,
      default: void 0
    },
    iconEnd: {
      type: Boolean,
      default: false
    },
    iconHover: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const Anchor = useAnchor(props);
    const current = {
      class: {
        "icon-link": true,
        "icon-link-hover": props.iconHover
      },
      ref: elementRef
    };
    return () => h(
      BsLink,
      hProps(current, Anchor, block),
      () => [
        !props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : void 0,
        ...hSlots(context.slots.default),
        props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : void 0
      ]
    );
  }
});
