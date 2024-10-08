import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import { InlineProps, useInline } from '../../../composables/base/useInline';
import { hProps } from '../../../composables/utils/useProps';
import BsLink from '../../nuxt/bslink';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsAlertLink',
 props: {
  ...InlineProps,
  ...AnchorProps,
  tag: {
   type: String,
   default: 'a',
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const Anchor = useAnchor(props);
  //
  const current = {
   class: {
    'alert-link': true,
   },
  };
  //
  return () =>
   h(BsLink, hProps(current, Anchor, inline), context.slots);
 },
});
