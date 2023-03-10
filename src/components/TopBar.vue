<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Fogelhaus",
            drawer: false,
            group: null,
            items: [
                // {
                //     title: 'Home',
                //     path: '/'
                // },
                {
                    title: 'Login',
                    path: '/'
                },
                {
                    title: 'Dashboard',
                    path: '/dashboard'
                },
            ]
        }
    }
})
</script>

<template>
    <v-layout>

        <v-app-bar density="compact" color="#4caf50" theme="dark" :elevation="8" >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ title }}
                <v-icon
                    end
                    icon="mdi-bird"
                ></v-icon>
            </v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer  v-model="drawer"  location="left" temporary>
            <v-row class="pa-4">
                <h1>
                    <v-icon
                    icon="mdi-bird"
                    ></v-icon>
                    FH
                </h1>
                
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