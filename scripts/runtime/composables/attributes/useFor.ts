import { type InjectIDOptions, injectID } from '../../composables/attributes/useID';
import { addProp } from '../../composables/utils/useProps';
import { ref, computed } from '#imports';

export const ForProps = {
 for: {
  type: String,
 },
};
export interface IForProps {
 for?: string;
}

export function useFor<P extends IForProps>(props: P, options: InjectIDOptions) {
 //
 const id = props.for || injectID(options);
 const useDOM = ref<boolean>(id ? true : false);
 //
 return {
  class: {},
  attr: computed(() => {
   return {
    ...addProp(id, 'for', id),
   };
  }),
  state: {
   id,
   useDOM,
  },
 };
}
