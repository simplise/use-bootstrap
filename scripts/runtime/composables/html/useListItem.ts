import { computed } from '#imports';
//
export const ListItemProps = {
 inline: {
  type: Boolean,
 },
};
//
export interface IListItemProps {
 inline?: boolean;
}
//
export function useListItem<P extends IListItemProps>(props: P) {
 //
 return {
  class: computed(() => {
   return {
    'list-inline-item': props.inline,
   };
  }),
 };
}
