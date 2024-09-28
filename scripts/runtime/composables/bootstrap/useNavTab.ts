import { computed } from '#imports';
//
export const NavTabProps = {
 nav: {
  type: String, // Empty , tabs , pills
 },
 fill: {
  type: Boolean,
 },
 justified: {
  type: Boolean,
 },
};
//
export interface INavTabProps {
 nav?: string;
 fill?: boolean;
 justified?: boolean;
}
//
export function useNavTab<P extends INavTabProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    [`nav-${props.nav}`]: props.nav,
    'nav-fill': props.fill,
    'nav-justified': props.justified,
   };
  }),
 };
}
