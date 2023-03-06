<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Alerts",
            items: [
                {
                    title: "I have covid",
                    author: "Chance"
                },
                {
                    title: "Don't let Banana out without a collar",
                    author: "Ivy"
                },
            ],
            colors: [
                '#ffbaba',
                '#ff5252',
                '#ff7b7b',
                'red lighten-1',
                'deep-purple accent-4',
            ],
        }
    }
})
</script>

<template>
    <v-card width="80vw" color="red" min-width="400px" class="mx-auto mt-15">
        <v-layout>
            <v-col>
                <v-card-title>{{title}}</v-card-title>
                <v-carousel
                    cycle
                    height="200"
                    hide-delimiters
                    show-arrows="hover"
                >
                    <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-sheet
                        color= #ff7b7b
                        height="100%"
                        class="d-flex justify-center align-center text-white"
                    >

                        <div class="flex-column mt-5">
                            <div class="text-h4">
                                {{ item.title }}
                            </div>
                            <div class="text-p">- {{ item.author }}</div>
                        </div>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-layout>
    </v-card>
</template>

<style scoped></style>