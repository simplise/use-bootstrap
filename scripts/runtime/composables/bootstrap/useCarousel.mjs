import {
  computed,
  nextTick,
  ref,
  onMounted,
  watch,
  h
} from "vue";
import { useEvent } from "../../utils/useEvent.mjs";
import {
  querySelectorToID,
  waitAfterTransition,
  reflow
} from "../../utils/useDOM.mjs";
import carouselIndicators from "../../components/bootstrap/carousel/carouselIndicators.mjs";
import carouselIndicatorsButton from "../../components/bootstrap/carousel/carouselIndicatorsButton.mjs";
import carouselControl from "../../components/bootstrap/carousel/carouselControl.mjs";
import { isTrue, toNum } from "../../utils/useProps.mjs";
import {
  isNumber,
  unrefElement,
  useCycleList,
  useIntervalFn,
  useElementVisibility,
  useSwipe,
  whenever
} from "../../utils/helpers.mjs";
export const CarouselProps = {
  current: {
    type: String
  },
  slide: {
    type: Boolean,
    default: true
  },
  interval: {
    type: [String, Number, Boolean],
    default: 5e3
  },
  fade: {
    type: Boolean
  },
  dark: {
    type: Boolean
  },
  touch: {
    type: [Boolean, String],
    default: true
  },
  control: {
    type: Boolean
  },
  indicators: {
    type: Boolean
  }
};
export function useCarousel(props, elementRef, eventSuffix) {
  const selector = ".carousel-item";
  const current = ref(props.current || "");
  const nextItem = ref("");
  const nextCurrent = ref(props.current || "");
  const sliding = ref(false);
  const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
  const targetIsVisible = useElementVisibility(elementRef);
  const { isSwiping, direction } = useSwipe(elementRef);
  const interval = ref(isNumber(props.interval) ? toNum(props.interval) : 0);
  const {
    pause,
    resume: cycle,
    isActive: isCycling
  } = useIntervalFn(async () => {
    await next();
  }, interval);
  const slideList = ref([]);
  if (props.slide && props.interval) {
    watch(
      targetIsVisible,
      () => {
        if (targetIsVisible.value) {
          cycle();
        } else {
          pause();
        }
      },
      { immediate: true }
    );
  }
  if (isTrue(props.touch)) {
    whenever(isSwiping, async () => {
      pause();
      switch (direction.value) {
        case "left":
          await next();
          break;
        case "right":
          await prev();
          break;
      }
      cycle();
    });
  }
  const getItems = () => {
    const element = unrefElement(elementRef);
    const list = querySelectorToID(selector, { element });
    const { state, next: next2, prev: prev2 } = useCycleList(list);
    state.value = current.value;
    return { state, next: next2, prev: prev2 };
  };
  const next = async () => {
    nextItem.value = getItems().next();
    await slide(true);
  };
  const prev = async () => {
    nextItem.value = getItems().prev();
    await slide(false);
  };
  const to = async (target) => {
    const activeIndex = slideList.value.indexOf(current.value);
    let index;
    if (isNumber(target)) {
      index = Number(target);
      nextItem.value = slideList.value[index];
    } else {
      index = slideList.value.indexOf(target);
      nextItem.value = target;
    }
    if (index == activeIndex) {
      return;
    }
    await slide(activeIndex < index);
  };
  const slide = async (isNext) => {
    if (sliding.value) {
      return;
    }
    if (isCycling.value) {
      pause();
    }
    nextCurrent.value = nextItem.value;
    const activeElement = document.getElementById(current.value);
    const nextElement = document.getElementById(nextItem.value);
    const directionalClassName = isNext ? "carousel-item-start" : "carousel-item-end";
    const orderClassName = isNext ? "carousel-item-next" : "carousel-item-prev";
    if (!nextElement || !activeElement) {
      return;
    }
    sliding.value = true;
    if (props.slide) {
      nextElement.classList.add(orderClassName);
      await reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      await waitAfterTransition(activeElement, true);
      nextElement.classList.remove(directionalClassName, orderClassName);
      activeElement.classList.remove(orderClassName, directionalClassName);
    }
    current.value = nextItem.value;
    nextItem.value = "";
    sliding.value = false;
    await nextTick();
    if (props.interval) {
      cycle();
    }
  };
  onMounted(() => {
    if (!current.value) {
      const element = unrefElement(elementRef);
      slideList.value = querySelectorToID(selector, { element });
      if (slideList.value.length > 0) {
        current.value = slideList.value[0];
        nextCurrent.value = current.value;
      }
    }
  });
  const method = expose({
    next,
    prev,
    pause,
    cycle,
    to
  });
  exposeState({
    current,
    nextCurrent,
    interval
  });
  return {
    class: computed(() => {
      return {
        slide: props.slide,
        "carousel-fade": props.fade,
        "carousel-dark": props.dark
      };
    }),
    attr: computed(() => {
      return {
        "data-bv-current": current.value
      };
    }),
    method,
    renderIndicators: () => {
      if (props.indicators) {
        return h(
          carouselIndicators,
          {},
          () => slideList.value.map((listItem) => {
            return h(
              carouselIndicatorsButton,
              {
                slideTo: listItem
              },
              void 0
            );
          })
        );
      } else {
        return void 0;
      }
    },
    renderControl: () => {
      if (props.control) {
        return [
          h(
            carouselControl,
            {
              slide: "prev"
            },
            void 0
          ),
          h(
            carouselControl,
            {
              slide: "next"
            },
            void 0
          )
        ];
      } else {
        return void 0;
      }
    }
  };
}
