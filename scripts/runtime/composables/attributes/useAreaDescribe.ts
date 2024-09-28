import type { Ref } from 'vue';
import { useEvent } from '../utils/useEvent';
import type { IIDProps } from '../../composables/attributes/useID';
import { useIDRef } from '../../composables/attributes/useID';
import { ref, inject, computed, provide, onMounted } from '#imports';

export function useProvideAreaDescribe() {
 const areaDescribe = ref('');
 provide('areaDescribe', areaDescribe);
}

export function useAreaDescribedby(
 props: IIDProps,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const areaDescribe = ref('');
 const { exposeState } = useEvent(props, elementRef, 'Describe');

 exposeState({
  areaDescribe,
 });

 return {
  attr: computed(() => {
   return {
    'aria-describedby': areaDescribe.value,
   };
  }),
 };
}

export function useAreaDescribe(
 props: IIDProps,
 elementRef: Ref<HTMLElement | undefined>,
) {
 const areaDescribe = inject<Ref<string> | undefined>(
  'areaDescribe',
  undefined,
 );

 const eid = useIDRef(props, elementRef);
 if (areaDescribe) {
  onMounted(() => {
   if (eid.value) {
    areaDescribe.value = eid.value;
    // id.state.useDOM.value = true;
   }
  });
 }

 return {};
}
