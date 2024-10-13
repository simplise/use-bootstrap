import { useFloating, arrow, autoUpdate, flip, shift, offset } from "@floating-ui/vue";
import { useElementHover } from "../utils/helpers.js";
import { addProp } from "../../composables/utils/useProps.js";
import { computed, ref, watch, h } from "#imports";
export const TooltipProps = {
  title: {
    type: [String],
    default: ""
  },
  placement: {
    type: String,
    default: "top"
  },
  template: {
    type: String
  }
};
export function useTooltip(props, elementRef) {
  if (!props.toggle || props.toggle != "tooltip") {
    return {};
  }
  const isHovered = useElementHover(elementRef);
  const isShow = ref(false);
  const tooltipRef = ref();
  const tooltipArrowRef = ref();
  const tooltiPlacement = ref(props.placement);
  const { floatingStyles, placement, middlewareData } = useFloating(elementRef, tooltipRef, {
    placement: tooltiPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      // autoPlacement(),
      flip(),
      shift(),
      offset(5),
      arrow({ element: tooltipArrowRef })
    ]
  });
  watch(isHovered, () => {
    isShow.value = isHovered.value;
  });
  return {
    attr: computed(() => {
      return {};
    }),
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
                "tooltip": true,
                "bs-tooltip-auto": true,
                "show": isShow.value
              },
              "style": floatingStyles.value,
              "data-popper-placement": placement.value,
              "ref": tooltipRef
            },
            [
              h(
                "div",
                {
                  class: {
                    "tooltip-arrow": true
                  },
                  style: {
                    ...addProp(middlewareData.value.arrow?.x, "left", `${middlewareData.value.arrow?.x}px`),
                    ...addProp(middlewareData.value.arrow?.y, "top", `${middlewareData.value.arrow?.y}px`),
                    position: "absolute"
                  },
                  ref: tooltipArrowRef
                }
              ),
              h(
                "div",
                {
                  class: {
                    "tooltip-inner": true
                  }
                },
                props.title
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
