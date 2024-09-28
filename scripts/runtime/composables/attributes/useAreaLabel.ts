import type { Ref } from 'vue';
import { useEvent } from '../utils/useEvent';
import { type IIDProps, useIDRef } from '../../composables/attributes/useID';
import { ref, inject, computed, onMounted } from '#imports';

export function useAreaLabelledby(
 props: IIDProps,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const areaLabel = ref('');
 const { exposeState } = useEvent(props, elementRef, 'label');

 exposeState({
  areaLabel,
 });

 return {
  attr: computed(() => {
   return {
    'aria-labelledby': areaLabel.value,
   };
  }),
 };
}

export function useAreaLabel(
 props: IIDProps,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const areaLabel = inject<Ref<string> | undefined>('areaLabel', undefined);
 const eid = useIDRef(props, elementRef);
 if (areaLabel) {
  onMounted(() => {
   if (eid.value) {
    areaLabel.value = eid.value;
   }
  });
  // id.state.useDOM.value = true;
 }

 return {};
}
