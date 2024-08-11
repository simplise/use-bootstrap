import Typed from "typed.js";
import { h, ref, defineComponent, onMounted, onUnmounted } from "#imports";
export default defineComponent({
  name: "Typed",
  props: {
    // options: {
    //   type: Object as PropType<TypedOptions>,
    //   required: true,
    // },
    strings: {
      type: Array,
      default: () => [],
      required: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    typeSpeed: {
      type: Number,
      default: 50
    },
    backDelay: {
      type: Number,
      default: 500
    },
    startDelay: {
      type: Number,
      default: 1e3
    },
    backSpeed: {
      type: Number,
      default: 100
    }
  },
  setup(props, context) {
    const typedElement = ref();
    const typed = ref();
    onMounted(() => {
      typed.value = new Typed(
        typedElement.value,
        {
          strings: props.strings,
          loop: props.loop,
          typeSpeed: props.typeSpeed,
          backDelay: props.backDelay,
          startDelay: props.startDelay,
          backSpeed: props.backSpeed
        }
      );
    });
    onUnmounted(() => {
      typed.value.destroy();
    });
    return () => h(
      "span",
      {
        ref: typedElement
      },
      context.slots.default
    );
  }
});
