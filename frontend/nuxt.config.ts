// nuxt.config.ts
export default defineNuxtConfig({
  // Habilitar Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/a11y", "@nuxtjs/tailwindcss", "@pinia/nuxt"],

  // CSS global

  // Aquí le decimos a Nuxt dónde está nuestro archivo CSS real
  css: [".  /assets/css/main.css"],

  // Tailwind vía Vite plugin
  vite: {
    plugins: [
      // Si usas @tailwindcss/vite
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // Importar variables en todos los componentes automáticamente
          additionalData: `@use "~/assets/styles/variables.scss" as *;`,
        },
      },
    },
  },

  // TypeScript estricto
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
