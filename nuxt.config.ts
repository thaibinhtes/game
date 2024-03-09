// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],

  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/app.css',
    '~/assets/icons/style.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
