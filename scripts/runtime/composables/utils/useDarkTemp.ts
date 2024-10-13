import { useViewStateDomAttr } from '../viewState/source/useViewStateDomAttr';
import { useViewStateStorage } from '../viewState/source/useViewStateStorage';
import { onMounted, ref, watch } from '#imports';

export function useDarkTemp() {
 const htmlState = useViewStateDomAttr('html', 'data-bs-theme'); // 'dark',''
 const result = ref(htmlState.model.value == 'dark'); // true,false

 onMounted(() => {
  if (result.value) {
   htmlState.model.value = 'dark';
  }
  else {
   htmlState.model.value = '';
  }
 });

 watch(result, () => {
  if (result.value) {
   htmlState.model.value = 'dark';
  }
  else {
   htmlState.model.value = '';
  }
 });
 return result;
}
