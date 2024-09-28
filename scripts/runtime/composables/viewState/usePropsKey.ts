import { hash } from 'ohash';
import { computed } from '#imports';
//
export function usePropsKey(props: unknown) {
 return computed(() => hash(props));
}
