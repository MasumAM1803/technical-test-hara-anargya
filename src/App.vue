<script setup>
import { ref } from "vue"
import SideBar from './components/SideBar.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <v-app>
    <SideBar />
    <div class="sm:ms-64">
    <Navbar />
    <div class="p-4 ">
      <div class="p-4">
        <router-view></router-view>
      </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped></style>
