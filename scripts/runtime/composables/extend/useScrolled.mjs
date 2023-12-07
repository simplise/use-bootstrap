import { computed } from "vue";
import { useWindowScroll } from "../../utils/helpers.mjs";
export const ScrolledProps = {
  scrolledPosition: {
    type: Number,
    default: 1e3
  },
  scrolledClass: {
    type: String,
    default: void 0
  }
};
export function useScrolled(props) {
  if (props.scrolledClass) {
    const { y } = useWindowScroll();
    const scrolled = computed(() => y.value > 1e3);
    return {
      class: computed(() => {
        return {
          [`${props.scrolledClass}`]: scrolled.value
        };
      })
    };
  } else {
    return {};
  }
}
