import { InlineProps, useInline } from '../../../composables/base/useInline';
import { hProps } from '../../../composables/utils/useProps';
import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import BsLink from '../../nuxt/bslink';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsNavbarBrand',
 props: {
  ...InlineProps,
  ...AnchorProps,
  tag: {
   type: String,
   default: 'span',
  },
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const Anchor = useAnchor(props);
  //
  const current = {
   class: {
    'navbar-brand': true,
   },
  };
  //
  return () =>
   h(
    BsLink,
    hProps(
     current,
     Anchor,
     inline),
    context.slots,
   );
 },
});
