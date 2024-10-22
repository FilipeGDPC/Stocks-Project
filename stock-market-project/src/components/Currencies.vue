<template>
  <p class="text-h4 text-bold text-center">Currencies</p>
  <div class="flex q-my-lg q-gutter-md">
    <q-card v-for="currency in currencies" class="q-pa-md currency-card" style="border: 1px solid black;">
      <q-card-section class="text-center">
        <p class="text-h5">{{ currency.name }}</p>
        <p class="text-subtitle1">{{ currency.value }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

const currencies = [
  {
    name: 'USD',
    value: 1.0
  },
  {
    name: 'EUR',
    value: 0.85
  },
  {
    name: 'JPY',
    value: 110.0
  }
]
</script>

<style scoped></style>