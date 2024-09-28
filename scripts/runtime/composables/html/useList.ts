import { computed } from '#imports';
//
export const ListProps = {
 inline: {
  type: Boolean,
 },
 unstyled: {
  type: Boolean,
 },
};
//
export interface IListProps {
 inline?: boolean;
 unstyled?: boolean;
}
//
export function useList<P extends IListProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    'list-unstyled': props.unstyled,
    'list-inline': props.inline,
   };
  }),
 };
}
