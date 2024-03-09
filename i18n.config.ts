import localesEn from '~/locales/en-US.js'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  messages: {
    en: {
      ...localesEn
    },
  }
}))