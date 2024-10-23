<template>
  <div class="q-pa-md">
    <q-table
      title="Historical Data"
      :rows="rows"
      :columns="columns"
      row-key="date"
      :filter="filter"
      grid
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <q-card bordered flat>
            <q-card-section>
              <div class="text-bold">{{ props.row.symbol }} - {{ props.row.date }}</div>
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ props.row[col.name] }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filter = ref('');

const columns = [
  { name: 'date', required: true, label: 'Date', align: 'left', field: row => row.date, format: val => `${val}`, sortable: true },
  { name: 'symbol', align: 'left', label: 'Symbol', field: 'symbol', sortable: true },
  { name: 'exchange', align: 'left', label: 'Exchange', field: 'exchange', sortable: true },
  { name: 'open', align: 'left', label: 'Open', field: 'open', sortable: true },
  { name: 'high', align: 'left', label: 'High', field: 'high', sortable: true },
  { name: 'low', align: 'left', label: 'Low', field: 'low', sortable: true },
  { name: 'close', align: 'left', label: 'Close', field: 'close', sortable: true },
  { name: 'volume', align: 'left', label: 'Volume', field: 'volume', sortable: true },
  { name: 'adj_open', align: 'left', label: 'Adj Open', field: 'adj_open', sortable: true },
  { name: 'adj_high', align: 'left', label: 'Adj High', field: 'adj_high', sortable: true },
  { name: 'adj_low', align: 'left', label: 'Adj Low', field: 'adj_low', sortable: true },
  { name: 'adj_close', align: 'left', label: 'Adj Close', field: 'adj_close', sortable: true },
  { name: 'adj_volume', align: 'left', label: 'Adj Volume', field: 'adj_volume', sortable: true }
];

const rows = [
  {
    date: '2019-02-01T00:00:00+0000',
    symbol: 'AAPL',
    exchange: 'XNAS',
    open: 166.96,
    high: 168.98,
    low: 165.93,
    close: 166.52,
    volume: 32668138.0,
    adj_open: 164.0861621594,
    adj_high: 166.0713924395,
    adj_low: 163.073891274,
    adj_close: 163.6537357617,
    adj_volume: 32668138.0
  },
  {
    date: '2019-02-01T00:00:00+0000',
    symbol: 'AAPL',
    exchange: 'XNAS',
    open: 166.96,
    high: 168.98,
    low: 165.93,
    close: 166.52,
    volume: 32668138.0,
    adj_open: 164.0861621594,
    adj_high: 166.0713924395,
    adj_low: 163.073891274,
    adj_close: 163.6537357617,
    adj_volume: 32668138.0
  },
  {
    date: '2019-02-01T00:00:00+0000',
    symbol: 'AAPL',
    exchange: 'XNAS',
    open: 166.96,
    high: 168.98,
    low: 165.93,
    close: 166.52,
    volume: 32668138.0,
    adj_open: 164.0861621594,
    adj_high: 166.0713924395,
    adj_low: 163.073891274,
    adj_close: 163.6537357617,
    adj_volume: 32668138.0
  },
  {
    date: '2019-02-01T00:00:00+0000',
    symbol: 'AAPL',
    exchange: 'XNAS',
    open: 166.96,
    high: 168.98,
    low: 165.93,
    close: 166.52,
    volume: 32668138.0,
    adj_open: 164.0861621594,
    adj_high: 166.0713924395,
    adj_low: 163.073891274,
    adj_close: 163.6537357617,
    adj_volume: 32668138.0
  },
  {
    date: '2019-02-01T00:00:00+0000',
    symbol: 'AAPL',
    exchange: 'XNAS',
    open: 166.96,
    high: 168.98,
    low: 165.93,
    close: 166.52,
    volume: 32668138.0,
    adj_open: 164.0861621594,
    adj_high: 166.0713924395,
    adj_low: 163.073891274,
    adj_close: 163.6537357617,
    adj_volume: 32668138.0
  },
  // Adicione mais dados aqui se necessário
];
</script>

<style scoped>
.grid-style-transition {
  transition: transform 0.2s;
}

.grid-style-transition:hover {
  transform: translateY(-5px);
}
</style>