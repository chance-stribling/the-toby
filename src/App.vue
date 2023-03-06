<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <TopBar/>
  <div class="body">

    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
.body{
  padding: 2rem;
}
</style>
