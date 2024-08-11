import { useDirective } from "../composables/directive/useDirective.js";
import { defineNuxtPlugin } from "#app";
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
