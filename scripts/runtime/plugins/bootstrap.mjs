import { defineNuxtPlugin } from "#app";
import { useDirective } from "../composables/directive/useDirective.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(
    "bootstrap",
    {
      mounted(el) {
        useDirective(el);
      }
    }
  );
});
