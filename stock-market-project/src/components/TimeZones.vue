<template>
  <div class="q-pa-md">
    <q-table
      title="Time Zones"
      :rows="timezones"
      :columns="columns"
      row-key="timezone"
      :filter="filter"
      grid
      hide-header
      :rows-per-page-options="[16,20,24,28,32]"
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
              <div class="text-bold">{{ props.row.timezone }}</div>
              <p class="text-subtitle1">Standard: {{ props.row.abbr }}</p>
              <p class="text-subtitle1">Daylight: {{ props.row.abbr_dst }}</p>
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

const columns = [
  { name: 'timezone', required: true, label: 'Timezone', align: 'left', field: row => row.timezone, format: val => `${val}`, sortable: true },
  { name: 'abbr', align: 'left', label: 'Standard Abbreviation', field: 'abbr', sortable: true },
  { name: 'abbr_dst', align: 'left', label: 'Daylight Abbreviation', field: 'abbr_dst', sortable: true }
];

const timezones = [
  {
    timezone: 'UTC',
    abbr: 'UTC',
    abbr_dst: 'UTC'
  },
  {
    timezone: 'America/New_York',
    abbr: 'EST',
    abbr_dst: 'EDT'
  },
  {
    timezone: 'America/Chicago',
    abbr: 'CST',
    abbr_dst: 'CDT'
  },
  {
    timezone: 'America/Denver',
    abbr: 'MST',
    abbr_dst: 'MDT'
  },
  {
    timezone: 'America/Los_Angeles',
    abbr: 'PST',
    abbr_dst: 'PDT'
  },
  {
    timezone: 'Pacific/Honolulu',
    abbr: 'HST',
    abbr_dst: 'HST'
  },
  {
    timezone: 'Europe/London',
    abbr: 'GMT',
    abbr_dst: 'BST'
  },
  {
    timezone: 'Europe/Berlin',
    abbr: 'CET',
    abbr_dst: 'CEST'
  },
  {
    timezone: 'Europe/Athens',
    abbr: 'EET',
    abbr_dst: 'EEST'
  },
  {
    timezone: 'Europe/Moscow',
    abbr: 'MSK',
    abbr_dst: 'MSD'
  },
  {
    timezone: 'Asia/Tokyo',
    abbr: 'JST',
    abbr_dst: 'JST'
  },
  {
    timezone: 'Australia/Sydney',
    abbr: 'AEST',
    abbr_dst: 'AEDT'
  },
  {
    timezone: 'Asia/Shanghai',
    abbr: 'CST',
    abbr_dst: 'CDT'
  },
  {
    timezone: 'Asia/Kolkata',
    abbr: 'IST',
    abbr_dst: 'IST'
  },
  {
    timezone: 'Africa/Johannesburg',
    abbr: 'SAST',
    abbr_dst: 'SAST'
  },
  {
    timezone: 'Africa/Johannesburg',
    abbr: 'SAST',
    abbr_dst: 'SAST'
  }
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