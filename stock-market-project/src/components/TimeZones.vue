<template>
   <div class="q-pa-md q-mt-md">
     <p class="text-h6 q-mx-sm">Time Zones</p>
  
      <div class="row">
        <q-card v-for="timezone in paginatedTimezones" :key="timezone.timezone" class="q-pa-md col-3 transition" flat bordered>
          <q-card-section class="flex justify-between">
            <div>
              <span class="text-h5 text-bold">{{ timezone.timezone }}</span>
              <p class="text-subtitle1">Standard: {{ timezone.abbr }}</p>
              <p class="text-subtitle1">Daylight: {{ timezone.abbr_dst }}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row justify-center q-mt-md">
        <q-pagination
          v-model="currentPage"
          :max="maxPage"
          color="primary"
          boundary-numbers
          size="lg"
        />
      </div>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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
  }
];

const itemsPerPage = 12;
const currentPage = ref(1);

const paginatedTimezones = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return timezones.slice(start, end);
});

const maxPage = computed(() => Math.ceil(timezones.length / itemsPerPage));
</script>

<style scoped>
.transition {
  transition: transform 0.2s;
}

.transition:hover {
  transform: translateY(-5px);
}
</style>