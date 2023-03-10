<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import FooterPanel from './components/FooterPanel.vue'
</script>

<template>
  <div class="container">
    
    <div>
      <TopBar/>
    </div>
    <div class="body">
      
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <div class="footer">
      
      <FooterPanel/>
    </div>
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
  margin-top: 60px;
}

</style>
