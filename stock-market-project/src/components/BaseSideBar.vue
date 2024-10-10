<template>
  <template v-for="(menuItem, index) in menuList" :key="index">
    <router-link :to="menuItem.route" class="q-item q-item-type row no-wrap q-item--clickable q-link hover-highlight">
      <q-item-section avatar>
        <q-icon :name="menuItem.icon" />
      </q-item-section>
      <q-item-section>
        {{ menuItem.label }}
      </q-item-section>
    </router-link>
  </template>
</template>

<script setup>
const menuList = [
  {
    icon: 'home',
    label: 'Home',
    route: '/'
  },
  {
    icon: 'paid',
    label: 'Currencies',
    route: '/currencies'
  },
  {
    icon: 'currency_exchange',
    label: 'Exchanges',
    route: '/exchanges'
  },
  {
    icon: 'store',
    label: 'Glocal Stock Market',
    route: '/glocal-stock-market'
  },
  {
    icon: 'history',
    label: 'Historical Data',
    route: '/splits-data'
  },
  {
    icon: 'public',
    label: 'Time Zones',
    route: '/time-zones'
  },
  {
    icon: 'help',
    label: 'Help',
    route: '/help'
  }
]
</script>

<style scoped>
.hover-highlight:hover {
  background-color: #e0e0e0; /* Light grey background on hover */
}
</style>