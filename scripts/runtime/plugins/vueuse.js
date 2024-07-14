import { defineNuxtPlugin } from "#imports";
import { vOnClickOutside } from "@vueuse/components";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("onClickOutside", vOnClickOutside);
});
