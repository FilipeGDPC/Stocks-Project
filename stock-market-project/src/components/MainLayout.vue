<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>TradeSmart <q-icon name="whatshot" /></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500" bordered :mini="miniState"
      @mouseenter="miniState = false" @mouseleave="miniState = true">
      <BaseSideBar />
    </q-drawer>

    <q-page-container class="bg-grey-1">
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
  background-image: url('https://www.marketplace.org/wp-content/uploads/2021/10/stockmarket.jpg?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; 
}

.text-white {
  color: white;
}
</style>