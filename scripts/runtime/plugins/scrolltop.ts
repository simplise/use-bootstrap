import { defineNuxtPlugin } from '#app';

// ページにURL直接移動や更新した際にずれるのを防止
// https://mirumi.tech/nuxt3-scroll-to-top/
// https://github.com/nuxt/nuxt/discussions/16223
export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.hook('page:finish', () => {
  window.scrollTo({
   top: 0,
   left: 0,
   behavior: 'instant',
  });
 });
});
