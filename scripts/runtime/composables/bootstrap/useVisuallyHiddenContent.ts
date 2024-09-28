import { h } from '#imports';
//
export const VisuallyHiddenContentProps = {
 label: {
  type: String,
 },
};
//
export interface IVisuallyHiddenContentProps {
 label?: string;
}
//
export function useVisuallyHiddenContent<P extends IVisuallyHiddenContentProps>(
 props: P,
) {
 //
 return {
  render: () => {
   if (props.label) {
    return h('span', { class: { 'visually-hidden': true } }, props.label);
   }
   else {
    return undefined;
   }
  },
 };
}
