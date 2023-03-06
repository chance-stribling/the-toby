<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "User List",
            users: [
                {
                    username: "CStribble",
                    name: "Chance",
                    status: "Pooping"
                },
                {
                    username: "GlitterGirl",
                    name: "Ivy",
                    status: "Sleeping"
                },
            ]
        }
    }
})
</script>

<template>
   
</template>

<style scoped></style>