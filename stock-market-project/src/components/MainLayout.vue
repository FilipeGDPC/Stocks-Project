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
  background-image: url('https://img.freepik.com/vetores-gratis/padrao-de-grade-de-losango-dourado-sem-costura-em-fundo-preto_53876-97589.jpg?ga=GA1.1.1544741072.1728932876&semt=ais_hybrid');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; 
}

.text-white {
  color: white;
}
</style>