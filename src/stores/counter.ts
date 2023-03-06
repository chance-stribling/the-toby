import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('draw', () => {
  let drawer = ref(false)
  function invert() {
    drawer.value = !drawer
  }

  return { drawer, invert }
})
