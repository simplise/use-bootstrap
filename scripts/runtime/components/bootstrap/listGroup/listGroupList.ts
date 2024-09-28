import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, hasValue, addProp } from '../../../composables/utils/useProps';
import {
 CurrentProps,
 useItemsCurrent,
} from '../../../composables/bootstrap/useItemsCurrent';
import {
 ScrollSpyProps,
 useScrollSpy,
} from '../../../composables/bootstrap/useScrollSpy';
import { defineComponent, h, computed, ref } from '#imports';
//
export default defineComponent({
 name: 'BsListGroupList',
 props: {
  ...BlockProps,
  ...CurrentProps,
  ...ScrollSpyProps,
  numbered: {
   type: Boolean,
  },
  flush: {
   type: Boolean,
  },
  horizontal: {
   type: [Boolean, String],
   default: undefined,
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  const itemsCurrent = useItemsCurrent(props, context, elementRef, 'list');
  const spy = useScrollSpy(props, context, elementRef);
  //
  const current = {
   class: computed(() => {
    return {
     'list-group': true,
     'list-group-flush': props.flush,
     'list-group-numbered': props.numbered,
     [`list-group-horizontal${hasValue(props.horizontal) ? `-${props.horizontal}` : ''
     }`]: props.horizontal,
    };
   }),
   style: computed(() => {
    return {
     // ...addProp(props.color, "--bs-list-group-bg", `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-list-group-border-color', `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-list-group-action-hover-bg', `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-list-group-action-active-bg', `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-list-group-active-bg', `var(--bs-${props.color})`),
     ...addProp(props.color, '--bs-list-group-active-border-color', `var(--bs-${props.color})`),
     // ...addProp(!props.textColor && props.color, "--bs-list-group-color", `var(--bs-contrast-${props.color})`),
     ...addProp(!props.textColor && props.color, '--bs-list-group-action-color', `var(--bs-contrast-${props.color})`),
     ...addProp(!props.textColor && props.color, '--bs-list-group-action-hover-color', `var(--bs-contrast-${props.color})`),
     ...addProp(!props.textColor && props.color, '--bs-list-group-action-active-color', `var(--bs-contrast-${props.color})`),
     ...addProp(!props.textColor && props.color, '--bs-list-group-active-color', `var(--bs-contrast-${props.color})`),
    };
   }),
   ref: elementRef,
  };
  //
  return () =>
   h(
    props.numbered ? 'ol' : 'ul',
    hProps(current, block, itemsCurrent, spy),
    context.slots,
   );
 },
});
