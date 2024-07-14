import { defineNuxtPlugin } from "#app";
import { useHeadSafe } from "#imports";
import { useDynamicRouteParam } from "../composables/extend/dynamicRoute/useDynamicRouteParam.js";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:loading:start", () => {
    const lang = useDynamicRouteParam("lang");
    useHeadSafe({
      htmlAttrs: { "lang": () => lang.value }
    });
  });
});
