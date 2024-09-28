import { hProps, addProp } from '../../composables/utils/useProps';
import { BlockProps, useBlock } from '../../composables/base/useBlock';
import { useDirective } from '../../composables/directive/useDirective';
import { defineComponent, h, ref, onMounted } from '#imports';
import { Icon } from '#components';
//
export default defineComponent({
 name: 'BsIcon',
 props: {
  ...BlockProps,
  icon: {
   type: String,
   default: undefined,
  },
  color: {
   type: String,
   default: undefined,
  },
 },
 setup(props) {
  //
  const elementRef = ref<HTMLElement>();
  const block = useBlock(props);
  //
  const current = {
   attr: {
    name: props.icon,
   },
   style: {
    'vertical-align': '-.125em', // https://icons.getbootstrap.com/
    ...addProp(props.color, 'color', `var(--bs-${props.color})`),
   },
   ref: elementRef,
  };
  //
  // onMounted(() => {
  //  useDirective(elementRef.value);
  // });
  if (props.icon === undefined) {
   return;
  }
  //
  return () =>
   h(
    Icon,
    hProps(current, block),
    undefined,
   );
 },
});
