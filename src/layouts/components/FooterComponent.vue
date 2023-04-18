<script setup>
import { ref } from "vue";
const tab = ref("mails");
</script>

<template>
  <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
    <q-tab name="mails" icon="mail" label="Mails" />
    <q-tab name="alarms" icon="alarm" label="Alarms" />
    <q-tab name="movies" icon="movie" label="Movies" />
  </q-tabs>
</template>
