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
        <div class="text-center text-white q-pa-md">
          <p class="text-h4 q-mb-md">Welcome to our financial data consultation platform!</p>

          <p class="text-h6 q-mb-md">On our site, you can easily access detailed information about the financial markets with
            just a few clicks. Powered by the Marketstack APIs, we offer a reliable and user-friendly platform where you
            can perform free consultations on a wide range of data, including currencies, stock exchanges, time zones,
            and more.
          </p>

          <p class="text-h6 q-mb-md">We believe that having access to accurate financial data is key to making informed
            decisions. That’s why we ensure that all queries made through our site are based on precise, up-to-date
            information from one of the most trusted sources in the industry. Explore and take advantage of having
            essential financial data like currency rates, exchange details, and global market insights at your
            fingertips—completely free of charge!
          </p>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import BaseSideBar from './BaseSideBar.vue'

const drawer = ref(true)
const miniState = ref(true)
</script>

<style scoped>
.bg-stock-image {
  background-image: url('https://www.marketplace.org/wp-content/uploads/2021/10/stockmarket.jpg?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text-white {
  color: white;
}
</style>