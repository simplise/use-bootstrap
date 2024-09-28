import type { SetupContext } from 'vue';
import { hSlots, type IHPropsModel } from '../../composables/utils/useProps';
import { useAnchor, AnchorProps, type IAnchorProps } from '../html/useAnchor';
import BsLink from '../../nuxt/bslink';
import { h } from '#imports';
//
export const DropdownItemProps = {
 ...AnchorProps,
 divider: {
  type: Boolean,
 },
 text: {
  type: Boolean,
 },
 active: {
  type: Boolean,
 },
};

export interface IDropdownItemProps extends IAnchorProps {
 divider?: boolean;
 text?: boolean;
 active?: boolean;
}

export function useDropdownItem<P extends IDropdownItemProps>(
 props: P,
 context: SetupContext<Record<string, unknown>>,
): IHPropsModel {
 //
 const Anchor = useAnchor(props);
 //
 return {
  method: {},
  render: () => {
   if (props.divider) {
    return h('hr', {
     class: {
      'dropdown-divider': true,
     },
    });
   }
   else if (props.text) {
    return h(
     'span',
     {
      class: {
       'dropdown-item-text': true,
      },
     },
     hSlots(context.slots.default),
    );
   }
   else {
    return h(
     BsLink,
     {
      class: {
       'dropdown-item': true,
       'active': props.active,
       ...Anchor.class,
      },
      ...Anchor.attr,
     },
     hSlots(context.slots.default),
    );
   }
  },
 };
}
