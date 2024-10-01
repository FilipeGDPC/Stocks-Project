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
    <q-separator :key="'sep' + index" v-if="menuItem.separator" />
  </template>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    route: '/'
  },
  {
    icon: 'paid',
    label: 'Currencies',
    separator: false,
    route: '/currencies'
  },
  {
    icon: 'currency_exchange',
    label: 'Exchanges',
    separator: false
  },
  {
    icon: 'store',
    label: 'Glocal Stock Market',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Splits Data',
    separator: false
  },
  {
    icon: 'watch',
    label: 'TimeZones',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
</script>

<style lang="scss" scoped></style>
