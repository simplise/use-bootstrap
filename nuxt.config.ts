// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'usebootstrap',
    'nuxt-icon',
    '@vueuse/nuxt',
    "@nuxt/image"
    ],
  usebootstrap: {
    bootstrap: {
      prefix: ``
    },
    html: {
      prefix: `B`
    },
  },
  css: [
    "~/assets/scss/docs.scss"
  ],
})
