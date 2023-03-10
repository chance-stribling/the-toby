<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            title: "Chores",
            chores: [
                {
                    title:"Wash the Dishes",
                    assignedTo: "Luke, Logan",
                    id: 1,
                    completed: false
                },
                {
                    title:"Walk the dogs",
                    assignedTo: "Ivy",
                    id: 2,
                    completed: false
                },
                {
                    title:"Make Dinner",
                    assignedTo: "Angie",
                    id: 3,
                    completed: false
                },
                {
                    title:"Wash your dogs",
                    assignedTo: "Drake",
                    id: 4,
                    completed: false
                },
                {
                    title:"Pick Up Your Toys",
                    assignedTo: "Jules",
                    id: 4,
                    completed: false
                },
            ],
            dialog: false,
        }
    }
})
</script>

<template>
    <v-card width="80vw"  color="green" min-width="400px" class="mx-auto mt-15">
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
                                <span class="text-h5">New Chore</span>
                            </v-card-title>
                            <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            label="Chore Description*"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    
                                    <v-col
                                        cols="6"
                                    >

                                        <v-select
                                            chips
                                            multiple
                                            :items="['Luke', 'Logan','Drake', 'Chance', 'Ivy', 'Angie', 'Nessa', 'Alec']"
                                            label="Assigned To*"
                                            required
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="6"
                                    >
                                        <v-autocomplete
                                            :items="[1,2,3,4,5]"
                                            label="Priority*"
                                        ></v-autocomplete>
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
                    
                <v-sheet class="d-flex mb-5 pa-5" color="#7bff82">
                <v-row class="mx-auto  justify-space-evenly">

                        <v-card
                        v-for="chore in chores"
                        :key="chore.id"
                        :title="chore.title"
                        :subtitle="chore.assignedTo"
                        width="400px"
                        class="my-5"
                        >
                        <v-card-actions>
                            <v-row class="align-start mx-auto">

                                <v-checkbox 
                                v-model="chore.completed"
                                label="Completed"
                                >
                            </v-checkbox>
                            <v-btn icon="mdi-pencil"></v-btn>
                        </v-row>
                        </v-card-actions>                        
                    </v-card>
                </v-row>
            </v-sheet>
                
            </v-col>
        </v-layout>
    </v-card>
</template>

<style scoped></style>