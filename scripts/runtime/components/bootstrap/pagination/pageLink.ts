import { InlineProps, useInline } from '../../../composables/base/useInline';
import { usePageLink } from '../../../composables/bootstrap/usePagination';
import { hProps } from '../../../composables/utils/useProps';
import {
 AnchorProps,
 useAnchor,
} from '../../../composables/html/useAnchor';
import BsLink from '../../nuxt/bslink';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsPageLink',
 props: {
  ...InlineProps,
  ...AnchorProps,
 },
 setup(props, context) {
  //
  const inline = useInline(props);
  const Anchor = useAnchor(props);
  const pageLink = usePageLink(props);
  //
  return () =>
   h(
    BsLink,
    hProps(
     pageLink,
     Anchor,
     inline),
    context.slots,
   );
 },
});
