<template>
  <q-layout view="hHh Lpr lff">
    <!-- <q-header class="bg-gray text-black">
      <q-toolbar>
        
      </q-toolbar>
    </q-header> -->

    <q-drawer class="q-pa-md" v-model="drawer" show-if-above :width="230" :breakpoint="500" bordered>
      
      <p class="text-h5">TradeSmart <q-icon name="whatshot" /></p>
      <q-separator class="q-mb-md" />
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
</style>