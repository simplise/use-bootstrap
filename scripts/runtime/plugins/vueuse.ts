import { vOnClickOutside } from '@vueuse/components';
import { defineNuxtPlugin } from '#imports';

// https://nuxt.com/docs/guide/directory-structure/plugins
export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.vueApp.directive('onClickOutside', vOnClickOutside);
});
