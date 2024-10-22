<template>
  <div class="row justify-center q-gutter-md q-mt-xl">
    <q-card v-for="currency in currencies" :key="currency.name" class="bg-secondary q-pa-md col-3 transition" flat bordered>
      <q-card-section class="flex justify-between">
        <span class="text-h5 text-bold">{{ currency.name }} :</span>
        <div class="flex items-center">
          <span class="text-subtitle1">{{ currency.value }}</span>
          <q-icon
            :name="currency.change > 0 ? 'arrow_upward' : 'arrow_downward'"
            :color="currency.change > 0 ? 'green' : 'red'"
            class="q-ml-sm"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const currencies = [
  {
    name: 'USD',
    value: 1.0,
    change: 0.02 // Positive value indicates an increase
  },
  {
    name: 'EUR',
    value: 0.85,
    change: -0.01 // Negative value indicates a decrease
  },
  {
    name: 'JPY',
    value: 110.0,
    change: 0.5 // Positive value indicates an increase
  }
];
</script>

<style scoped>
.transition {
  transition: transform 0.2s;
}

.transition:hover {
  transform: translateY(-5px);
}
</style>