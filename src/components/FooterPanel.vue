<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    }
})
</script>

<template>
    <v-layout>

        <v-footer   density="compact" color="#4caf50" theme="dark" class="mt-15 text-center d-flex flex-column">
            <div>
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="text"
                ></v-btn>
            </div>
            <div class=" text-subtitle-1 pt-0">
                "A mutable model that you can reliably understand is better than an immutable one that leaks."
            </div>
            <div class="text-p">
                - Evan You, creator of Vue.js and Vite.js.
            </div>

    <v-divider></v-divider>

    <div class="mt-5 ">
      {{ new Date().getFullYear() }} — <strong>C. Stribbles</strong>
    </div>
        </v-footer>
    </v-layout>
</template>

<style scoped></style>