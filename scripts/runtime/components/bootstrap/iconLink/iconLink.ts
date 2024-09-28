import { hProps, hSlots } from '../../../composables/utils/useProps';
import {
 useAnchor,
 AnchorProps,
} from '../../../composables/html/useAnchor';
import { BlockProps, useBlock } from '../../../composables/base/useBlock';
import BsLink from '../../nuxt/bslink';
import { Icon } from '#components';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'BsIconLink',
 props: {
  ...BlockProps,
  ...AnchorProps,
  tag: {
   type: String,
   default: 'a',
  },
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
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const Anchor = useAnchor(props);
  //
  const current = {
   class: {
    'icon-link': true,
   },
   ref: elementRef,
  };
  //
  return () =>
   h(
    BsLink,
    hProps(current, Anchor, block),
    () => [
     !props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : undefined,
     ...hSlots(context.slots.default),
     props.iconEnd && props.icon ? h(Icon, { name: props.icon }) : undefined,
    ],
   );
 },
});
