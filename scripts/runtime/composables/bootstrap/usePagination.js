import { addProp } from "../../composables/utils/useProps.js";
import { provide, inject, computed } from "#imports";
export const PaginationProps = {
  size: {
    type: String
  }
};
export const PageItemProps = {
  active: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  }
};
const PageItemDisabledkey = "disabled.PageItem";
export function usePagination(props) {
  const classObject = {
    pagination: true,
    [`pagination-${props.size}`]: props.size
  };
  return {
    class: classObject
  };
}
export function usePageItem(props) {
  provide(PageItemDisabledkey, props.disabled);
  return {
    class: {
      "page-item": true,
      "active": props.active,
      "disabled": props.disabled
    },
    attr: {
      ...addProp(props.active, "aria-current", "page")
    }
  };
}
export function usePageLink(props) {
  const pageItemDisabled = inject(PageItemDisabledkey, false);
  return {
    class: {
      "page-link": true
    },
    attr: computed(() => {
      return {
        ...addProp(pageItemDisabled || props.disabled, "tabindex", "-1")
      };
    })
  };
}
