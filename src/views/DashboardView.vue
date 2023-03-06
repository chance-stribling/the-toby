<script setup lang="ts">
import AlertCard from '../components/AlertCard.vue';
import ChoreCard from '../components/ChoreCard.vue';
import EventCard from '../components/EventCard.vue';
import UserList from '../components/UserList.vue';

</script>

<template>
    <AlertCard/>
    <ChoreCard/>
    <EventCard/>
    <UserList/>
  <!-- <div>
    <h1>This is where you go to view CHORES, ALERTS, and EVENT REMINDERS</h1>
    <ul>
        <ul>
            <li>Users</li>
            <ul>
                <li>id</li>
                <li>fname</li>
                <li>mname</li>
                <li>lname</li>
                <li>userName</li>
                <li>password</li>
                <li>role - manager, member, or regular guest</li>
            </ul>
        </ul>
        <li>Chores</li>
        <ul>
            <li>id - id</li>
            <li>title - simple title</li>
            <li>assignedTo - user or users assigned to task, can not include regular guests</li>
            <li>dateTimeAssigned - when was this assigned</li>
            <li>priority - asap, when you can</li>
            <li>completed - boolean</li>
        </ul>
        <li>Alerts</li>
        <ul>
            <li>id</li>
            <li>subject - main message</li>
            <li>details - optional</li>
            <li>createdBy - for permission to update or delete</li>
            <li>dateTimePosted - when was the alert posted</li>
        </ul>
        <li>Event</li>
        <ul>
            <li>id</li>
            <li>eventTitle - name of the event</li>
            <li>location - where is it</li>
            <li>going - who is going, headcount, can include guests</li>
        </ul>
    </ul>
  </div> -->
</template>
