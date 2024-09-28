import { addProp } from '../../composables/utils/useProps';
import { provide, inject, computed } from '#imports';

export const PaginationProps = {
 size: {
  type: String,
 },
};

export interface IPagination {
 size?: string;
}

export const PageItemProps = {
 active: {
  type: Boolean,
 },
 disabled: {
  type: Boolean,
 },
};

export interface IPageItem {
 active?: boolean;
 disabled?: boolean;
}

const PageItemDisabledkey = 'disabled.PageItem';

export function usePagination<P extends IPagination>(props: P) {
 const classObject: Record<string, unknown> = {
  pagination: true,
  [`pagination-${props.size}`]: props.size,
 };

 return {
  class: classObject,
 };
}

export function usePageItem<P extends IPageItem>(props: P) {
 //
 provide(PageItemDisabledkey, props.disabled);
 //
 return {
  class: {
   'page-item': true,
   'active': props.active,
   'disabled': props.disabled,
  },
  attr: {
   ...addProp(props.active, 'aria-current', 'page'),
  },
 };
}

export function usePageLink<P extends IPageItem>(props: P) {
 //
 const pageItemDisabled = inject(PageItemDisabledkey, false);
 //
 return {
  class: {
   'page-link': true,
  },
  attr: computed(() => {
   return {
    ...addProp(pageItemDisabled || props.disabled, 'tabindex', '-1'),
   };
  }),
 };
}
