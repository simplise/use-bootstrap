import {
  useEventEmitter,
  EventEmitProps
} from "../utils/useEventEmitter.js";
import { addProp, hasValue } from "../../composables/utils/useProps.js";
import { ref, computed, inject, h, watch } from "#imports";
export const CarouselControlProps = {
  slide: {
    type: String
    // prev , next
  },
  slideTo: {
    type: [String, Number]
    // slide index number
  },
  control: {
    type: Boolean
  },
  ...EventEmitProps
};
export function useCarouselControl(props, elementRef) {
  if (!props.slide && !hasValue(props.slideTo)) {
    return {};
  }
  const active = ref(false);
  const current = inject(
    `nextCurrent.carousel`,
    void 0
  );
  const slideEmitter = useEventEmitter(
    props,
    props.slide || "to",
    "carousel",
    elementRef
  );
  if (current) {
    watch(
      current,
      (next) => {
        if (next == props.slideTo) {
          active.value = true;
        } else {
          active.value = false;
        }
      },
      { immediate: true }
    );
  }
  const slide = async () => {
    if (props.slide) {
      await slideEmitter();
    } else {
      await slideEmitter(props.slideTo);
    }
  };
  return {
    class: computed(() => {
      return {
        active: active.value,
        [`carousel-control-${props.slide}`]: props.control
      };
    }),
    attr: computed(() => {
      return {
        type: "button",
        ...addProp(props.href, "href", props.href),
        ...addProp(props.target, "target", props.target),
        ["data-bs-target"]: true
      };
    }),
    method: {
      slide
    },
    event: {
      onClick: slide
    },
    renderControl: () => [
      h("span", {
        "class": {
          [`carousel-control-${props.slide}-icon`]: true
        },
        "aria-hidden": "true"
      }),
      h(
        "span",
        {
          class: {
            "visually-hidden": true
          }
        },
        props.slide == "prev" ? "Previous" : "Next"
      )
    ]
  };
}
