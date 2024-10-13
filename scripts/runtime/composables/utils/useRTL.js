import { useViewStateDomAttr } from "../view-state/source/useViewStateDomAttr.js";
export function useRTL() {
  const htmlState = useViewStateDomAttr("html", "dir");
  return htmlState.model;
}
