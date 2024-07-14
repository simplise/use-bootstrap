import { useState } from "#app";
export function getState(key, init) {
  const state = useState(key, init);
  return state.value;
}
export function setState(key, value) {
  const state = useState(key);
  state.value = value;
}
