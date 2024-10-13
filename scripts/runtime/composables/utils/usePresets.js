import { useRuntimeConfig } from "#app";
import { isString } from "./helpers.js";
export function includesPresets(name, value) {
  if (!isString(value)) {
    return false;
  }
  const uboptions = useRuntimeConfig().public.usebootstrap;
  const presets = uboptions.bootstrap?.presets;
  if (!presets) {
    return false;
  }
  const params = presets[name];
  if (!params) {
    return false;
  }
  return params?.includes(value);
}
