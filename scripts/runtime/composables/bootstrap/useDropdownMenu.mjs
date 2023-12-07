import { computed, inject, nextTick, ref, watch } from "vue";
import { addProp } from "../../utils/useProps.mjs";
import { onClickOutside } from "../../utils/helpers.mjs";
import {
  useFloating,
  autoUpdate,
  flip,
  offset,
  shift
} from "@floating-ui/vue";
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
  }
};
export function useDropdownMenu(props, elementRef) {
  DropdownMenuProps.autoClose;
  const tipPlacement = ref(props.floating?.placement);
  const isShow = ref(false);
  const active = inject("active.dropdown", ref(false));
  const toggleRef = inject("toggleRef.dropdown", ref());
  const placement = inject("placement.dropdown", ref(""));
  const floatingPlace = computed(() => {
    switch (placement.value) {
      case "dropup":
        if (props.alignment == "end") {
          return `top-end`;
        } else {
          return `top-start`;
        }
      case "dropend":
        if (props.alignment == "end") {
          return `right-end`;
        } else {
          return `right-start`;
        }
      case "dropstart":
        if (props.alignment == "end") {
          return `left-end`;
        } else {
          return `left-start`;
        }
      default:
        if (props.alignment == "end") {
          return `bottom-end`;
        } else {
          return `bottom-start`;
        }
    }
  });
  const { floatingStyles } = useFloating(toggleRef, elementRef, {
    placement: floatingPlace.value,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      shift(),
      offset(2)
    ]
  });
  if ([true, "", "outside", "true"].includes(props.autoClose)) {
    onClickOutside(elementRef, (_event) => {
      if (active.value) {
        active.value = false;
        _event.stopPropagation();
      }
    });
  }
  watch(active, (value) => {
    if (value) {
      show();
    } else {
      hide();
    }
  });
  const show = async () => {
    await nextTick();
    isShow.value = true;
  };
  const hide = async () => {
    isShow.value = false;
  };
  return {
    class: computed(() => {
      return {
        "dropdown-menu": true,
        "dropdown-menu-dark": props.dark,
        show: isShow.value
      };
    }),
    style: computed(() => {
      if (toggleRef.value) {
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
    state: {
      useTeleport: false,
      tipPlacement,
      isShow
    }
  };
}
