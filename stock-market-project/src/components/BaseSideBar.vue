<template>
  <template v-for="(menuItem, index) in menuList" :key="index">
    <q-item clickable @click="scrollToSection(menuItem.id)" v-ripple>
      <q-item-section avatar>
        <q-icon :name="menuItem.icon" />
      </q-item-section>
      <q-item-section>
        {{ menuItem.label }}
      </q-item-section>
    </q-item>
  </template>
</template>

<script setup>
const menuList = [
  {
    icon: 'home',
    label: 'Home',
    id: 'home-section'
  },
  {
    icon: 'paid',
    label: 'Currencies',
    id: 'currencies-section'
  },
  {
    icon: 'currency_exchange',
    label: 'Exchanges',
    id: 'exchanges-section'
  },
  {
    icon: 'store',
    label: 'Glocal Stock Market',
    id: 'stock-market-section'
  },
  {
    icon: 'history',
    label: 'Historical Data',
    id: 'historical-data-section'
  },
  {
    icon: 'public',
    label: 'Time Zones',
    id: 'time-zones-section'
  },
  {
    icon: 'help',
    label: 'Help',
    id: 'help-section'
  }
]

</script>