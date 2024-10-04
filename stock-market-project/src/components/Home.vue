<template>
  <!-- <div class="q-pa-md"> -->
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>TradeSmart  <q-icon name="whatshot" /></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500" bordered :mini="miniState"
      @mouseenter="miniState = false" @mouseleave="miniState = true">
      <BaseSideBar />
    </q-drawer>

    <q-page-container class="bg-grey-1 ">
      <q-page padding class="flex-center">
        <p class="text-center">
          Welcome to My Stock Market App, here you can find the latest information about the stock market and do the
          right choice!
        </p>
      </q-page>
    </q-page-container>
  </q-layout>
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'
import BaseSideBar from './BaseSideBar.vue'

const drawer = ref(true)
const miniState = ref(true)
</script>
