// https://github.com/coreui/bootstrap-vue/tree/main/packages/bootstrap-vue/src/components
import type { Ref } from 'vue';
import { useFloating, arrow, flip, shift, offset, type Placement } from '@floating-ui/vue';
import { addProp, type IHPropsModel } from '../../composables/utils/useProps';
import {
 useElementVisibility,
} from '../utils/helpers';
// import Teleport from '../../components/teleport/teleport.vue';
import type { IToggleProps } from './useToggle';
import { computed, ref, h, watch } from '#imports';
//
export const PopoverProps = {
 title: {
  type: [String],
  default: '',
 },
 content: {
  type: [String],
  default: '',
 },
 placement: {
  type: [String],
  default: 'right',
 },
 template: {
  type: String,
 },
};
//
export interface IPopoverProps extends IToggleProps {
 title?: string;
 content?: string;
 placement?: string;
 template?: string;
}
//
export function usePopover<P extends IPopoverProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
): IHPropsModel {
 //
 if (!props.toggle || props.toggle != 'popover') {
  return {};
 }
 //
 const popoverRef = ref<HTMLElement>();
 const arrowRef = ref<HTMLElement>();
 const isShow = ref(false);
 const targetIsVisible = useElementVisibility(elementRef); // 可視状態の取得

 const { floatingStyles, placement, middlewareData } = useFloating(elementRef, popoverRef, {
  placement: props.placement as Placement,
  middleware: [
   // autoPlacement(),
   flip(),
   shift(),
   offset(9),
   arrow({ element: arrowRef }),
  ],
 });

 const toggle = async () => {
  isShow.value = !isShow.value;
 };
 // Modal内などのPopoveを閉じます
 watch(targetIsVisible,
  () => {
   if (targetIsVisible.value == false) {
    isShow.value = false;
   }
  });
 //
 return {
  attr: computed(() => {
   return {
   };
  }),
  event: {
   onClick: toggle,
  },
  render: () => {
   if (isShow.value) {
    return h(
     'span',
     {
      to: 'body',
     },
     h(
      'div',
      {
       'class': {
        'popover': true,
        'bs-popover-auto': true,
        'fade': true,
        'show': true,
       },
       'style': floatingStyles.value,
       'data-popper-placement': placement.value,
       'ref': popoverRef,
      },
      [
       h(
        'div',
        {
         class: {
          'popover-arrow': true,
         },
         style: {
          ...addProp(middlewareData.value.arrow?.x, 'left', `${middlewareData.value.arrow?.x}px`),
          ...addProp(middlewareData.value.arrow?.y, 'top', `${middlewareData.value.arrow?.y}px`),
          position: 'absolute',
         },
         ref: arrowRef,
        }),
       h(
        'div',
        {
         class: {
          'popover-header': true,
         },
        },
        props.title),
       h(
        'div',
        {
         class: {
          'popover-body': true,
         },
        },
        props.content,
       ),
      ],
     ),
    );
   }
   else {
    return undefined;
   }
  },
 };
}
