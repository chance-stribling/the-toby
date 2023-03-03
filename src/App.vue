<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
    <router-link to="/">
      <v-btn>Home</v-btn>
    </router-link>
    <router-link to="/login">
      <v-btn>Other</v-btn>
    </router-link>
    
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style scoped>

</style>
