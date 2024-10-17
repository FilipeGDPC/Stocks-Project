<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-gray text-black">
      <q-toolbar>
        <q-toolbar-title>TradeSmart <q-icon name="whatshot" /></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer  v-model="drawer" show-if-above :width="230" :breakpoint="500" bordered>
      <BaseSideBar />
    </q-drawer>

    <q-page-container>
      <q-page padding class="bg-stock-image">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import BaseSideBar from '../components/BaseSideBar.vue'

const drawer = ref(true)
const miniState = ref(true)
</script>

<style scoped>
.bg-stock-image {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf361ef5XB-imqMisjNxxVqmOxbVxQP7fRg&s');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; 
}

.bg-gray {
  background-color: rgb(237, 237, 237);
}
</style>