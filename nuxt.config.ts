// import raw from 'vite-raw-plugin'

export default defineNuxtConfig({
  modules: ['../src/module', 'nuxt-icon', 'nuxt-simple-sitemap'],
  // devtools: { enabled: true },
  nitro: { // &quot; がURL末につくエラーが発生し、解決できない
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/examples/',
        '/lang-en/',
        '/lang-ja/',
      ]
    }
  },
  routeRules: { // https://nuxt.com/docs/guide/concepts/rendering
    '/': { prerender: true },
    '/examples/**': { prerender: true },
    '/lang-en/**': { prerender: true },
    '/lang-ja/**': { prerender: true },
  },
  vite: {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
  },
  site: {
    url: 'https://usebootstrap.org',
  },
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
  ]
})
