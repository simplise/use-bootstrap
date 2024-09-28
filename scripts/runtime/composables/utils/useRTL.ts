import { useViewStateDomAttr } from '../viewState/source/useViewStateDomAttr';

export function useRTL() {
 const htmlState = useViewStateDomAttr('html', 'dir'); // 'rtl',''
 return htmlState.model;
}
