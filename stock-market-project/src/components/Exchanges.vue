<template>
  <div class="q-pa-md">
    <q-table
      grid
      flat bordered
      title="Exchanges"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="[6, 10, 14, 18, 22]"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered>
            <q-card-section class="text-center">
              <strong>{{ props.row.name }}</strong>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div><strong>Acronym:</strong> {{ props.row.acronym }}</div>
              <div><strong>MIC:</strong> {{ props.row.mic }}</div>
              <div><strong>Country:</strong> {{ props.row.country }}</div>
              <div><strong>Country Code:</strong> {{ props.row.country_code }}</div>
              <div><strong>City:</strong> {{ props.row.city }}</div>
              <div><strong>Website:</strong> <a :href="'http://' + props.row.website" target="_blank">{{ props.row.website }}</a></div>
              <div><strong>Timezone:</strong> {{ props.row.timezone.timezone }}</div>
              <div><strong>Standard Abbreviation:</strong> {{ props.row.timezone.abbr }}</div>
              <div><strong>Daylight Abbreviation:</strong> {{ props.row.timezone.abbr_dst }}</div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filter = ref('');
const pagination = ref({ page: 1, rowsPerPage: 6 });
const rowsPerPageOptions = [6, 12, 18];

const columns = [
  { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'acronym', align: 'left', label: 'Acronym', field: 'acronym', sortable: true },
  { name: 'mic', align: 'left', label: 'MIC', field: 'mic', sortable: true },
  { name: 'country', align: 'left', label: 'Country', field: 'country', sortable: true },
  { name: 'country_code', align: 'left', label: 'Country Code', field: 'country_code', sortable: true },
  { name: 'city', align: 'left', label: 'City', field: 'city', sortable: true },
  { name: 'website', align: 'left', label: 'Website', field: 'website', sortable: true },
  { name: 'timezone', align: 'left', label: 'Timezone', field: row => row.timezone.timezone, sortable: true },
  { name: 'abbr', align: 'left', label: 'Standard Abbreviation', field: row => row.timezone.abbr, sortable: true },
  { name: 'abbr_dst', align: 'left', label: 'Daylight Abbreviation', field: row => row.timezone.abbr_dst, sortable: true }
];

const rows = [
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
  },
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
  },
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
  },
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
  },
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
  },
  {
    name: 'NASDAQ Stock Exchange',
    acronym: 'NASDAQ',
    mic: 'XNAS',
    country: 'USA',
    country_code: 'US',
    city: 'New York',
    website: 'www.nasdaq.com',
    timezone: {
      timezone: 'America/New_York',
      abbr: 'EST',
      abbr_dst: 'EDT'
    }
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

.text-bold {
  font-weight: bold;
}
</style>