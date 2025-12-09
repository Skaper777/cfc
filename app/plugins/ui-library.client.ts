import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  if (import.meta.client) {
    // Импортируем конкретный компонент из библиотеки
    const { CfcInput } = await import("ui-library");

    // Регистрируем компонент глобально
    nuxtApp.vueApp.component("CfcInput", CfcInput);
  }
});
