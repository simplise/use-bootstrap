import type { Ref, PropType } from 'vue';
import {
 type Placement,
 useFloating,
 autoUpdate,
 flip,
 offset,
 shift,
} from '@floating-ui/vue';
import { addProp } from '../utils/useProps';
import { delay, onClickOutside } from '../utils/helpers';
import { computed, inject, ref, watch } from '#imports';
//
export interface IFloatingProps {
 placement?: Placement | undefined;
 offset?: number | undefined;
}
//
export const DropdownMenuProps = {
 floating: {
  type: Object as PropType<IFloatingProps>,
 },
 dark: {
  type: Boolean,
 },
 autoClose: {
  type: [Boolean, String],
  default: true,
 },
 alignment: {
  type: String,
  default: 'start',
 },
 offset: {
  type: String,
 },
 reference: {
  type: String,
 },
 mega: {
  type: Boolean,
 },
 animateOpen: {
  type: String,
 },
 // 動作不良のためカット
 // animateClose: {
 //   type: String,
 // }
};
//
export interface IDropdownMenuProps {
 floating?: IFloatingProps;
 dark?: boolean;
 autoClose: boolean | string;
 alignment: string;
 offset?: string;
 reference?: string;
 mega?: boolean;
 animateOpen?: string;
 // animateClose?: string;
}

//
export interface IDropdownMenuMethods {
 show: () => Promise<void>;
 hide: () => Promise<void>;
 toggle: () => Promise<void>;
 // dismiss: () => Promise<void>;
}
//
export function useDropdownMenu<P extends IDropdownMenuProps>(
 props: P,
 elementRef: Ref<HTMLElement | undefined>,
) {
 //
 const tipPlacement = ref(props.floating?.placement);
 const isShow = ref(false);
 // const isShown = ref(false);
 const active = inject<Ref<boolean>>('active.dropdown', ref(false));
 const toggleRef = inject<Ref<HTMLElement | undefined>>(
  'toggleRef.dropdown',
  ref(),
 );
 const placement = inject<Ref<string>>('placement.dropdown', ref(''));
 const animation = ref();
 const hasMega = inject<Ref<boolean>>('hasMega', ref(false));
 hasMega.value = props.mega || false;

 const floatingPlace = computed<Placement>(() => {
  switch (placement.value) {
   case 'dropup':
    switch (props.alignment) {
     case 'end':
      return `top-end`;
     case 'start':
      return `top-start`;
     default:
      return 'top';
    }
   case 'dropend':
    switch (props.alignment) {
     case 'end':
      return `right-end`;
     case 'start':
      return `right-start`;
     default:
      return 'right';
    }
   case 'dropstart':
    switch (props.alignment) {
     case 'end':
      return `left-end`;
     case 'start':
      return `left-start`;
     default:
      return 'left';
    }
   default:
    switch (props.alignment) {
     case 'end':
      return `bottom-end`;
     case 'start':
      return `bottom-start`;
     default:
      return 'bottom';
    }
  }
 });

 const { floatingStyles } = useFloating(toggleRef, elementRef, {
  placement: floatingPlace.value,
  whileElementsMounted: autoUpdate,
  middleware: [flip(), shift(), offset(2)],
 });

 if ([true, '', 'outside', 'true'].includes(props.autoClose)) {
  onClickOutside(elementRef, (_event) => {
   if (active.value) {
    active.value = false;
    _event.stopPropagation(); // ボタン上クリック対策
   }
  });
 }
 //
 const onClick = async () => {
  if (active.value) {
   active.value = false;
  }
 };
 //
 const show = async () => {
  animation.value = props.animateOpen;
  isShow.value = true;
  if (animation.value) {
   await delay(2000);
   if (isShow.value) {
    animation.value = undefined;
   }
  }
 };
 //
 const hide = async () => {
  isShow.value = false;
 };
 watch(
  active,
  (value) => {
   if (value) {
    show();
   }
   else {
    hide();
   }
  },
  { immediate: true },
 );
 //
 //
 return {
  class: computed(() => {
   return {
    'dropdown-menu': true,
    'dropdown-menu-dark': props.dark,
    'show': isShow.value,
    'animate__animated': props.animateOpen,
    ...(animation.value && { [`animate__${animation.value}`]: true }),
   };
  }),
  style: computed<Record<string, unknown>>(() => {
   if (props.mega) {
    return {
     left: '0',
    };
   }
   else if (toggleRef.value) {
    return floatingStyles.value;
   }
   else {
    return {};
   }
  }),
  attr: computed(() => {
   return {
    ...addProp(active.value, 'data-popper-placement', tipPlacement.value || ''),
   };
  }),
  event: {
   onClick,
  },
  state: {
   useTeleport: false,
   tipPlacement,
   isShow,
  },
 };
}
