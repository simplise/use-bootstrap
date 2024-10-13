import { vOnClickOutside } from "@vueuse/components";
import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("onClickOutside", vOnClickOutside);
});
