import { useViewStateDomAttr } from '../viewState/source/useViewStateDomAttr';
import { useViewStateStorage } from '../viewState/source/useViewStateStorage';
import { onMounted, ref, watch } from '#imports';

export function useDark() {
 const htmlState = useViewStateDomAttr('html', 'data-bs-theme'); // 'dark',''
 const result = ref(htmlState.model.value == 'dark'); // true,false

 onMounted(() => {
  const storage = useViewStateStorage('local', 'data-bs-theme', false);
  if (result.value != storage.model.value) {
   result.value = storage.model.value as boolean;
   if (result.value) {
    htmlState.model.value = 'dark';
   }
   else {
    htmlState.model.value = '';
   }
  }
 });

 watch(result, () => {
  const storage = useViewStateStorage('local', 'data-bs-theme', false);
  storage.model.value = result.value;
  if (result.value) {
   htmlState.model.value = 'dark';
  }
  else {
   htmlState.model.value = '';
  }
 });
 return result;
}
