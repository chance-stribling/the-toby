<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            username: '',
            password: '',
            show1: false
        }
    }
})
</script>

<template>
    <v-card width="500px" class="mx-auto mt-15">
        <v-layout>
            <v-col>

                <v-card-title>Login</v-card-title>
                <v-form @submit.prevent>
                    <v-text-field
                    v-model="username"
                    label="Username"
                    ></v-text-field>
                    <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password"
                    label="Password"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-btn type="submit" to="/" block class="mt-2">Submit</v-btn>
                </v-form>
            </v-col>
        </v-layout>
    </v-card>
</template>

<style scoped></style>