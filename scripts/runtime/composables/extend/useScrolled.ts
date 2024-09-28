import { useWindowScroll } from '../utils/helpers';
import { computed } from '#imports';
//
export interface IScrollProps {
 scrolledPosition?: number;
 scrolledClass?: string;
}
//
export const ScrolledProps = {
 scrolledPosition: {
  type: Number,
  default: 1000,
 },
 scrolledClass: {
  type: String,
  default: undefined,
 },
};
//
export function useScrolled<P extends IScrollProps>(
 props: P,
) {
 if (props.scrolledClass) {
  //
  const { y } = useWindowScroll();
  const scrolled = computed(() => y.value > 1000);
  //
  return {
   class: computed(() => {
    return {
     [`${props.scrolledClass}`]: scrolled.value,
    };
   }),
  };
 }
 else {
  return {};
 }
}
