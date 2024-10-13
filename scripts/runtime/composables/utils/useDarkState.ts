import { useViewStateDomAttr } from '../viewState/source/useViewStateDomAttr';
import { computed } from '#imports';

export function useDarkState() {
 const htmlState = useViewStateDomAttr('html', 'data-bs-theme'); // 'dark',''
 return computed(() => htmlState.model.value == 'dark'); // true,false
}
