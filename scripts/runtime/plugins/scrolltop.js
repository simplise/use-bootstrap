import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  });
});
