import {
  useFloating,
  autoUpdate,
  flip,
  offset,
  shift
} from "@floating-ui/vue";
import { addProp } from "../utils/useProps.js";
import { delay, onClickOutside } from "../utils/helpers.js";
import { computed, inject, ref, watch } from "#imports";
export const DropdownMenuProps = {
  floating: {
    type: Object
  },
  dark: {
    type: Boolean
  },
  autoClose: {
    type: [Boolean, String],
    default: true
  },
  alignment: {
    type: String,
    default: "start"
  },
  offset: {
    type: String
  },
  reference: {
    type: String
  },
  mega: {
    type: Boolean
  },
  animateOpen: {
    type: String
  }
  // 動作不良のためカット
  // animateClose: {
  //   type: String,
  // }
};
export function useDropdownMenu(props, elementRef) {
  const tipPlacement = ref(props.floating?.placement);
  const isShow = ref(false);
  const active = inject("active.dropdown", ref(false));
  const toggleRef = inject(
    "toggleRef.dropdown",
    ref()
  );
  const placement = inject("placement.dropdown", ref(""));
  const animation = ref();
  const hasMega = inject("hasMega", ref(false));
  hasMega.value = props.mega || false;
  const floatingPlace = computed(() => {
    switch (placement.value) {
      case "dropup":
        switch (props.alignment) {
          case "end":
            return `top-end`;
          case "start":
            return `top-start`;
          default:
            return "top";
        }
      case "dropend":
        switch (props.alignment) {
          case "end":
            return `right-end`;
          case "start":
            return `right-start`;
          default:
            return "right";
        }
      case "dropstart":
        switch (props.alignment) {
          case "end":
            return `left-end`;
          case "start":
            return `left-start`;
          default:
            return "left";
        }
      default:
        switch (props.alignment) {
          case "end":
            return `bottom-end`;
          case "start":
            return `bottom-start`;
          default:
            return "bottom";
        }
    }
  });
  const { floatingStyles } = useFloating(toggleRef, elementRef, {
    placement: floatingPlace.value,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(2)]
  });
  if ([true, "", "outside", "true"].includes(props.autoClose)) {
    onClickOutside(elementRef, (_event) => {
      if (active.value) {
        active.value = false;
        _event.stopPropagation();
      }
    });
  }
  const onClick = async () => {
    if (active.value) {
      active.value = false;
    }
  };
  const show = async () => {
    animation.value = props.animateOpen;
    isShow.value = true;
    if (animation.value) {
      await delay(2e3);
      if (isShow.value) {
        animation.value = void 0;
      }
    }
  };
  const hide = async () => {
    isShow.value = false;
  };
  watch(
    active,
    (value) => {
      if (value) {
        show();
      } else {
        hide();
      }
    },
    { immediate: true }
  );
  return {
    class: computed(() => {
      return {
        "dropdown-menu": true,
        "dropdown-menu-dark": props.dark,
        "show": isShow.value,
        "animate__animated": props.animateOpen,
        ...animation.value && { [`animate__${animation.value}`]: true }
      };
    }),
    style: computed(() => {
      if (props.mega) {
        return {
          left: "0"
        };
      } else if (toggleRef.value) {
        return floatingStyles.value;
      } else {
        return {};
      }
    }),
    attr: computed(() => {
      return {
        ...addProp(active.value, "data-popper-placement", tipPlacement.value || "")
      };
    }),
    event: {
      onClick
    },
    state: {
      useTeleport: false,
      tipPlacement,
      isShow
    }
  };
}
