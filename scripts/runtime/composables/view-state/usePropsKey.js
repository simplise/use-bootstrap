import { hash } from "ohash";
import { computed } from "#imports";
export function usePropsKey(props) {
  return computed(() => hash(props));
}
