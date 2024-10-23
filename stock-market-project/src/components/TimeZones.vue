<template>
  <div class="row justify-center q-gutter-md q-mt-xl">
    <q-card v-for="timezone in timezones" :key="timezone.timezone" class="bg-secondary q-pa-md col-3 transition" flat bordered>
      <q-card-section class="flex justify-between">
        <div>
          <span class="text-h5 text-bold">{{ timezone.timezone }}</span>
          <p class="text-subtitle1">Standard: {{ timezone.abbr }}</p>
          <p class="text-subtitle1">Daylight: {{ timezone.abbr_dst }}</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
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

.text-bold {
  font-weight: bold;
}
</style>