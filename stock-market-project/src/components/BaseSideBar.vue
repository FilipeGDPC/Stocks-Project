<template>
  <template v-for="(menuItem, index) in menuList" :key="index">
    <q-item clickable :active="menuItem.label === 'Outbox'" @click="router.push(menuItem.route)" v-ripple>
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
import { useRouter } from 'vue-router'

const router = useRouter()

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
  },
  {
    icon: 'store',
    label: 'Glocal Stock Market',
  },
  {
    icon: 'history',
    label: 'Historical Data',
  },
  {
    icon: 'public',
    label: 'Time Zones',
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
  }
]
</script>

<style lang="scss" scoped></style>
