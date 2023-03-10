<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Events",
            events: [
                {
                    id: 1,
                    title: "Asheville",
                    description: "Going to Asheville to explore while the power is out.",
                    date: '3/10/2023',
                },
                {
                    id: 2,
                    title: "Lugan Graduation",
                    description: "Congratulations! Luke and Logan for not giving up.",
                    date: '5/06/2023',
                }
            ],
            dialog: false,
            date: new Date(),
        }
    }
})
</script>

<template>
    <v-card width="80vw" color="blue" min-width="400px" class="mx-auto mt-15">
        <v-layout>
            
            <v-col>
                <v-card-title class="d-flex justify-space-between">
                    {{title}}
                    <v-dialog
                        v-model="dialog"
                        persistent
                        width="1024"
                    >
                        <template v-slot:activator="{ props }">
                            <v-btn
                                icon="mdi-plus"
                                size="small"
                                v-bind="props"
                            >
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">New Event</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Event Name*"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    
                                    <v-col
                                        cols="12"
                                    >

                                        <v-textarea 
                                            label="Event Description*"
                                            required
                                        ></v-textarea>
                                    </v-col>          
                                    <v-col cols="3">
                                        <v-text-field
                                            v-model="date"
                                            label="Event Date*"
                                            type="date"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green-darken-1"
                                variant="text"
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="green-darken-1"
                                variant="text"
                                @click="dialog = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card-title>
                    
                <v-sheet class="d-flex pa-5 mb-5" color="#62b4f5">
                    <v-expansion-panels variant="popout"  class="my-4">
                        <v-expansion-panel
                        v-for="event in events"
                        :key="event.id"
                        >
                        <v-expansion-panel-title>
                            <v-row>
                                <v-col cols="4" class="justify-start">
                                    {{ event.title }}
                                </v-col>
                                
                                <v-col
                                    cols="8"
                                    class="text--secondary"
                                >                              
                                <v-icon icon="mdi-calendar"></v-icon>    
                                {{ event.date }}
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div>{{ event.description }}</div>
                        </v-expansion-panel-text>    

                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-sheet>
                
            </v-col>
        </v-layout>
    </v-card>
</template>

<style scoped></style>