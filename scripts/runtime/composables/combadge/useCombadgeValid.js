import { parseURL, stringifyParsedURL } from "ufo";
import { useState } from "#imports";
export const CombadgeValidProps = {
  stateFor: {
    type: String,
    requird: true,
    default: ""
  }
};
export function useCombadgeValid(props) {
  const parsed = parseURL(props.stateFor);
  parsed.protocol = "";
  const key = stringifyParsedURL(parsed);
  const valid = useCombadgeValidState(key);
  return {
    valid
  };
}
export function useCombadgeValidState(key) {
  const state = useState(`_combadge_valid_${key}`, () => true);
  return state;
}
