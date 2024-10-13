import { InlineProps, useInline } from '../../../composables/base/useInline';
import { hProps, hSlots } from '../../../composables/utils/useProps';
import { BadgeProps, useBadge } from '../../../composables/bootstrap/useBadge';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
  name: 'BsBadge',
  props: {
    ...InlineProps,
    ...BadgeProps,
    tag: {
      type: String,
      default: 'span',
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, context) {
    //
    const inline = useInline(props);
    const badge = useBadge(props);
    //
    return () =>
      h(
        props.tag,
        hProps(badge, inline),
        hSlots(context.slots.default, badge.render),
      );
  },
});
