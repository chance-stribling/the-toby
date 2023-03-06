<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Chores",
            items: [
                {
                    title:"Wash the Dishes",
                    assignedTo: ["Luke", "Logan"]
                }
            ]
        }
    }
})
</script>

<template>
    <v-card width="80vw" color="green" min-width="400px" class="mx-auto mt-15">
        <v-layout>
            <v-col>
                <v-card-title>{{title}}</v-card-title>
            </v-col>
        </v-layout>
    </v-card>
</template>

<style scoped></style>