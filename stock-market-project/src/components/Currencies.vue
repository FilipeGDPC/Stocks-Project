<template>
  <div class="q-pa-md q-gutter-md q-mt-lg">
    <q-table 
      flat bordered
      title="Currencies"
      :rows="currencies"
      :columns="columns"
      row-key="code"
    >
    </q-table>
  </div>
</template>

<script setup>
const columns = [
  { name: 'code', required: true, label: 'Code', align: 'left', field: row => row.code, format: val => `${val}`, sortable: true },
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'symbol', align: 'left', label: 'Symbol', field: 'symbol', sortable: true },
  { name: 'symbol_native', align: 'left', label: 'Native Symbol', field: 'symbol_native', sortable: true },
  { name: 'change', align: 'left', label: 'Change', field: 'change', sortable: true }
];

const currencies = [
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    symbol_native: '$',
    change: 0.02 // Positive value indicates an increase
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    symbol_native: '€',
    change: -0.01 // Negative value indicates a decrease
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    symbol_native: '¥',
    change: 0.5 // Positive value indicates an increase
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    symbol_native: '£',
    change: 0.03 // Positive value indicates an increase
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    symbol_native: 'A$',
    change: -0.02 // Negative value indicates a decrease
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'C$',
    symbol_native: 'C$',
    change: 0.01 // Positive value indicates an increase
  }
  
];
</script>

<style scoped>

</style>