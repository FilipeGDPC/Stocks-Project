<template>
  <div class="q-pa-md">
    <q-table
      title="Global Stock Market"
      :rows="rows"
      :columns="columns"
      row-key="symbol"
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
              <div class="text-bold">{{ props.row.name }} - {{ props.row.symbol }}</div>
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
  { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'symbol', align: 'left', label: 'Symbol', field: 'symbol', sortable: true },
  { name: 'stock_exchange_name', align: 'left', label: 'Stock Exchange', field: 'stock_exchange_name', sortable: true },
  { name: 'stock_exchange_acronym', align: 'left', label: 'Acronym', field: 'stock_exchange_acronym', sortable: true },
  { name: 'stock_exchange_mic', align: 'left', label: 'MIC', field: 'stock_exchange_mic', sortable: true },
  { name: 'stock_exchange_country', align: 'left', label: 'Country', field: 'stock_exchange_country', sortable: true },
  { name: 'stock_exchange_country_code', align: 'left', label: 'Country Code', field: 'stock_exchange_country_code', sortable: true },
  { name: 'stock_exchange_city', align: 'left', label: 'City', field: 'stock_exchange_city', sortable: true },
  { name: 'stock_exchange_website', align: 'left', label: 'Website', field: 'stock_exchange_website', sortable: true },
  { name: 'timezone', align: 'left', label: 'Timezone', field: 'timezone', sortable: true },
  { name: 'abbr', align: 'left', label: 'Abbreviation', field: 'abbr', sortable: true },
  { name: 'abbr_dst', align: 'left', label: 'DST Abbreviation', field: 'abbr_dst', sortable: true }
];

const rows = [
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    name: 'MICROSOFT CORP',
    symbol: 'MSFT',
    stock_exchange_name: 'NASDAQ Stock Exchange',
    stock_exchange_acronym: 'NASDAQ',
    stock_exchange_mic: 'XNAS',
    stock_exchange_country: 'USA',
    stock_exchange_country_code: 'US',
    stock_exchange_city: 'New York',
    stock_exchange_website: 'www.nasdaq.com',
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  // Adicione mais dados aqui se necessário
];
</script>

<style scoped>



</style>0