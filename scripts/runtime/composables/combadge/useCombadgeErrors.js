import { useState } from "#imports";
export const CombadgeErrorsProps = {
  stateFor: {
    type: String,
    requird: true,
    default: ""
  }
};
export function useCombadgeErrors(props) {
  const errors = useCombadgeErrorsState(props.stateFor);
  return {
    errors
  };
}
export function useCombadgeErrorsState(key) {
  const state = useState(`_combadge_errors_${key}`, () => []);
  return state;
}
