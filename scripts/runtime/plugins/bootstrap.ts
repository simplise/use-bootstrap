import { useDirective } from '../composables/directive/useDirective';
import { defineNuxtPlugin } from '#app';

// https://nuxt.com/docs/guide/directory-structure/plugins
export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.vueApp.directive('bootstrap',
  {
   mounted(el: HTMLElement) {
    useDirective(el);
   },
  },
 );
});
