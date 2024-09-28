import { hProps } from '../../composables/utils/useProps';
import { useList, ListProps } from '../../composables/html/useList';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { IDProps, useID } from '../../composables/attributes/useID';
import {
 CurrentProps,
 useItemsCurrent,
} from '../../composables/bootstrap/useItemsCurrent';
import {
 ScrollSpyProps,
 useScrollSpy,
} from '../../composables/bootstrap/useScrollSpy';
import { defineComponent, h, ref } from '#imports';
//
export default defineComponent({
 name: 'HtmlList',
 props: {
  ...BlockProps,
  ...ListProps,
  ...CurrentProps,
  ...IDProps,
  ...ScrollSpyProps,
  tag: {
   type: String,
   default: 'ul',
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const list = useList(props);
  const id = useID(props, 'list');
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'list');
  const spy = useScrollSpy(props, context, elementRef);
  //
  const current = {
   ref: elementRef,
  };
  //
  return () => h(props.tag, hProps(id, list, block, itemsCurrent, spy, current), context.slots);
 },
});
