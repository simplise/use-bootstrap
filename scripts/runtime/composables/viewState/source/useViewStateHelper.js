import { useNuxtApp } from "#app";
import { ref } from "#imports";
export function useViewStateHelper(prop) {
  const nuxtApp = useNuxtApp();
  const helperName = `$${prop.key}`;
  const appHelper = nuxtApp[helperName];
  if (!appHelper) {
    throw new Error("plugin helper Not Found");
  }
  const result = appHelper();
  return {
    model: result.data,
    updated: ref(false),
    status: result.status
  };
}
