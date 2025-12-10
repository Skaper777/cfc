// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["ui-library/dist/ui-library.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/supabase",
  ],
  supabase: {
    // redirect: false,
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/confirm",
      include: undefined,
      exclude: [],
      saveRedirectToCookie: false,
    },
  },
});
