<template>
  <div class="row justify-center q-gutter-md q-mt-xl">
    <q-card v-for="currency in currencies" class=" col-3" style="border: 1px solid black;">
      <q-card-section class="flex justify-between">
        <span class="text-h5">{{ currency.name }} :</span>
        <span class="text-subtitle1">{{ currency.value }}</span>
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