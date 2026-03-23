<!-- app/layouts/default.vue -->
<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="layout__nav">
        <NuxtLink to="/" class="layout__logo"> 🎯 Nuxt Exercises </NuxtLink>
      </nav>
    </header>

    <main class="layout__main">
      <slot />
    </main>

    <footer class="layout__footer">
      <p>Nuxt 4 + Vue 3 + TypeScript</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  &__header {
    background: white;
    border-bottom: 1px solid $color-gray-200;
    padding: $spacing-md $spacing-xl;
  }

  &__nav {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__logo {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $color-primary;
    text-decoration: none;
  }

  &__main {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: $spacing-xl;
  }

  &__footer {
    text-align: center;
    padding: $spacing-md;
    color: $color-gray-700;
    font-size: $font-size-sm;
    border-top: 1px solid $color-gray-200;
  }
}
</style>
