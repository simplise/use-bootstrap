import { computed } from "#imports";
import { hash } from "ohash";
export function usePropsKey(props) {
  return computed(() => hash(props));
}
