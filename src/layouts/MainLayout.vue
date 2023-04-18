<script setup>
import { ref } from "vue";
import FooterComponent from "./components/FooterComponent.vue";
import NavBar from "./components/NavBar.vue";
</script>
<template>
  <q-layout>
    <q-header elevated>
      <NavBar />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!--    <q-footer elevated>
      <FooterComponent />
    </q-footer> -->
  </q-layout>
</template>
