import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import { InlineProps, useInline } from '../../../composables/base/useInline';
import { hProps, hSlots } from '../../../composables/utils/useProps';
import BsLink from '../../nuxt/bslink';
import { Icon } from '#components';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCardLink',
 props: {
  ...InlineProps,
  ...AnchorProps,
  icon: {
   type: String,
   default: undefined,
  },
  iconEnd: {
   type: Boolean,
   default: false,
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const Anchor = useAnchor(props);
  //
  const current = {
   class: {
    'card-link': true,
    'icon-link': props.icon,
   },
  };
  //
  return () =>
   h(
    BsLink,
    hProps(current, Anchor, inline),
    () => [
     !props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : undefined,
     ...hSlots(context.slots.default),
     props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : undefined,
    ],
   );
 },
});
