<template>
  <header>
    <nav :class="$style.nav">
      <router-link
        :to="{ name: 'home' }"
        :class="[$style.link, $style.linkHome]"
      >
        Мои расходы
      </router-link>
      <router-link :to="{name: 'family'}" :class="[$style.link, $style.linkDefault]">
        Семья
      </router-link>
      <router-link :to="{name: 'categories'}" :class="[$style.link, $style.linkDefault]">
        Категории
      </router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
    <ModalsContainer />
</template>

<script setup  lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<style module lang="scss">
html {
  font-family: Commissioner, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  display: flex;
  gap: 20px;
  align-items: flex-end;
}

.link {
  font-weight: 500;
  color: #2c3e50;
  transition: 0.2s color ease-in-out;
  text-decoration: none;

  &:global(.router-link-exact-active) {
    color: #4287b9;
  }
}

.linkHome {
  font-size: 24px;
}

.linkDefault {
  font-size: 18px;
  padding-bottom: 2px;
}
</style>
<script setup lang="ts"></script>