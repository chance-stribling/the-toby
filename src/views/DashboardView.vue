<script setup lang="ts">
import AlertCard from '../components/AlertCard.vue';
import AlertPanel from '../components/AlertPanel.vue';
import ChoreCard from '../components/ChoreCard.vue';
import EventCard from '../components/EventCard.vue';
import UserList from '../components/UserList.vue';

</script>

<template>
    <div>
        <AlertPanel/>
        <!-- <AlertCard/> -->
        <EventCard/>
        <ChoreCard/>
        <UserList/>
    </div>

</template>
