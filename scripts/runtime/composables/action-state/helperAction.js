import { useNuxtApp } from "#app";
export async function helperAction(method, params, actionProp, status, data) {
  const nuxtApp = useNuxtApp();
  const helperName = `$${actionProp.key}`;
  const actionHelper = nuxtApp[helperName];
  if (!actionHelper) {
    throw new Error("plugin helper Not Found");
  }
  await actionHelper({ method, params, status, data });
}
