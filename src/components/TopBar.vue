<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            drawer: false,
            group: null,
            items: [
                {
                    title: 'Home',
                    path: '/'
                },
                {
                    title: 'Dashboard',
                    path: '/dashboard'
                },
                {
                    title: 'Login',
                    path: '/login'
                }
            ]
        }
    }
})
</script>

<template>
    <v-layout>

        <v-toolbar theme="dark">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Nut House
                <v-icon
                    end
                    icon="mdi-home-flood"
                ></v-icon>
            </v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-row class="pa-4">
                <h1>Nut House</h1>
                <v-spacer/>
                <v-btn variant="flat" icon="mdi-arrow-left" size="small" @click.stop="drawer = !drawer"></v-btn>
            </v-row>
            <v-list :items="items">
                <v-list-item
                    v-for="item in items"
                    :to="item.path"
                    :key="item.title"
                >
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<style scoped></style>