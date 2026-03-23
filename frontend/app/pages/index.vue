<!-- app/pages/index.vue -->
<script setup lang="ts">
// Composition API con TypeScript
const projectName = ref<string>("nuxt-vue-exercises");
const techStack = ref<string[]>([
  "Nuxt 4",
  "Vue 3",
  "TypeScript",
  "SCSS",
  "Pinia",
  "Tailwind CSS",
]);

// definePageMeta para configuración de la página
// definePageMeta({
//   layout: "default",
// });

useSeoMeta({
  title: "Ejercicio 1 — Proyecto Inicial",
  description: "Estructura base del proyecto con Nuxt 4",
});
</script>

<template>
  <div class="home">
    <h1 class="home__title">✅ Ejercicio 1 completado</h1>
    <p class="home__subtitle">
      Proyecto: <strong>{{ projectName }}</strong>
    </p>

    <section class="home__stack">
      <h2>Stack tecnológico</h2>
      <ul class="home__list">
        <li v-for="tech in techStack" :key="tech" class="home__item">
          {{ tech }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__title {
    font-size: $font-size-2xl;
    color: $color-primary;
    margin-bottom: $spacing-sm;
  }

  &__subtitle {
    color: $color-gray-700;
    margin-bottom: $spacing-xl;
  }

  &__stack {
    h2 {
      font-size: $font-size-xl;
      margin-bottom: $spacing-md;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    list-style: none;
  }

  &__item {
    background: $color-primary;
    color: white;
    padding: $spacing-xs $spacing-md;
    border-radius: $border-radius-md;
    font-size: $font-size-sm;
    font-weight: 500;
  }
}
</style>
