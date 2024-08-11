import { useDynamicRouteParam } from "../composables/extend/dynamicRoute/useDynamicRouteParam.js";
import { defineNuxtPlugin } from "#app";
import { useHeadSafe } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:loading:start", () => {
    const lang = useDynamicRouteParam("lang");
    useHeadSafe({
      htmlAttrs: { lang: () => lang.value }
    });
  });
});
