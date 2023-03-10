<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Heads Up",
            items: [
                {
                    title: "I have covid",
                    author: "Chance"
                },
                {
                    title: "Don't let Banana out without a collar",
                    author: "Ivy"
                },
                {
                    title: "Don't forget about my performance",
                    author: "Luke"
                },
            ],
        }
    }
})
</script>

<template>
    <v-alert
        density="compact"
        type="error"
        :title= title
        width="99%"
        class="mx-auto mt-2"
    >
        <v-carousel
        cycle
        hide-delimiters
        :show-arrows="false"
        height="55px"
        width="50%"
        class="mx-auto"
        >
            <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            >
                <div class="flex-column">
                    <div class="text-h6">
                    {{ item.title }}
                    </div>
                    <div class="text-subtitle-2">- {{ item.author }}</div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-alert>
</template>

<style scoped></style>