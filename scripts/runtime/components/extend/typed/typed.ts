import Typed from 'typed.js';
import { h, ref, defineComponent, onMounted, onUnmounted } from '#imports';
import type { PropType } from '#imports';
// https://mattboldt.github.io/typed.js/
// https://github.com/duskmoon314/vue3-typed-js
export default defineComponent({
 name: 'Typed',
 props: {
  // options: {
  //   type: Object as PropType<TypedOptions>,
  //   required: true,
  // },
  strings: {
   type: Array as PropType<string[]>,
   default: () => [],
   required: true,
  },
  loop: {
   type: Boolean,
   default: true,
  },
  typeSpeed: {
   type: Number,
   default: 50,
  },
  backDelay: {
   type: Number,
   default: 500,
  },
  startDelay: {
   type: Number,
   default: 1000,
  },
  backSpeed: {
   type: Number,
   default: 100,
  },
 },

 setup(props, context) {
  //
  const typedElement = ref<Element>();
  const typed = ref<Typed>();
  //
  onMounted(() => {
   typed.value = new Typed(
    typedElement.value!,
    {
     strings: props.strings,
     loop: props.loop,
     typeSpeed: props.typeSpeed,
     backDelay: props.backDelay,
     startDelay: props.startDelay,
     backSpeed: props.backSpeed,
    },
   );
  });
  //
  onUnmounted(() => {
   typed.value!.destroy();
  });
  //
  return () => h(
   'span',
   {
    ref: typedElement,
   },
   context.slots.default,
  );
 },
});
