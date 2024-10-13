import { useFloating, arrow, flip, shift, offset } from "@floating-ui/vue";
import { addProp } from "../../composables/utils/useProps.js";
import {
  useElementVisibility
} from "../utils/helpers.js";
import { computed, ref, h, watch } from "#imports";
export const PopoverProps = {
  title: {
    type: [String],
    default: ""
  },
  content: {
    type: [String],
    default: ""
  },
  placement: {
    type: [String],
    default: "right"
  },
  template: {
    type: String
  }
};
export function usePopover(props, elementRef) {
  if (!props.toggle || props.toggle != "popover") {
    return {};
  }
  const popoverRef = ref();
  const arrowRef = ref();
  const isShow = ref(false);
  const targetIsVisible = useElementVisibility(elementRef);
  const { floatingStyles, placement, middlewareData } = useFloating(elementRef, popoverRef, {
    placement: props.placement,
    middleware: [
      // autoPlacement(),
      flip(),
      shift(),
      offset(9),
      arrow({ element: arrowRef })
    ]
  });
  const toggle = async () => {
    isShow.value = !isShow.value;
  };
  watch(
    targetIsVisible,
    () => {
      if (targetIsVisible.value == false) {
        isShow.value = false;
      }
    }
  );
  return {
    attr: computed(() => {
      return {};
    }),
    event: {
      onClick: toggle
    },
    render: () => {
      if (isShow.value) {
        return h(
          "span",
          {
            to: "body"
          },
          h(
            "div",
            {
              "class": {
                "popover": true,
                "bs-popover-auto": true,
                "fade": true,
                "show": true
              },
              "style": floatingStyles.value,
              "data-popper-placement": placement.value,
              "ref": popoverRef
            },
            [
              h(
                "div",
                {
                  class: {
                    "popover-arrow": true
                  },
                  style: {
                    ...addProp(middlewareData.value.arrow?.x, "left", `${middlewareData.value.arrow?.x}px`),
                    ...addProp(middlewareData.value.arrow?.y, "top", `${middlewareData.value.arrow?.y}px`),
                    position: "absolute"
                  },
                  ref: arrowRef
                }
              ),
              h(
                "div",
                {
                  class: {
                    "popover-header": true
                  }
                },
                props.title
              ),
              h(
                "div",
                {
                  class: {
                    "popover-body": true
                  }
                },
                props.content
              )
            ]
          )
        );
      } else {
        return void 0;
      }
    }
  };
}
