import { defineComponent, h } from "#imports";
import { InlineProps, useInline } from "../../../composables/base/useInline.js";
import { hProps, hSlots } from "../../../utils/useProps.js";
import { BadgeProps, useBadge } from "../../../composables/bootstrap/useBadge.js";
export default defineComponent({
  name: "BsBadge",
  props: {
    ...InlineProps,
    ...BadgeProps,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const badge = useBadge(props);
    return () => h(
      props.tag,
      hProps(badge, inline),
      hSlots(context.slots.default, badge.render)
    );
  }
});
