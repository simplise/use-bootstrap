import { defineComponent, h } from "vue";
import { InlineProps, useInline } from "../../../composables/base/useInline.mjs";
import { hProps, hSlots } from "../../../utils/useProps.mjs";
import { BadgeProps, useBadge } from "../../../composables/bootstrap/useBadge.mjs";
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
