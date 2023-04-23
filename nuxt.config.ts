// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["nuxt-typed-router", { strict: true }],
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "fr",
      messages: {
        en: {},
        fr: {},
      },
    },
  },
});
