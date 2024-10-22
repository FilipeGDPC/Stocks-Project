<template>
  <div class="row justify-center q-gutter-md q-mt-xl">
    <q-card v-for="timezone in timezones" :key="timezone.name" class="bg-secondary q-pa-md col-3 transition" flat bordered>
      <q-card-section class="flex justify-between">
        <span class="text-h5 text-bold">{{ timezone.name }} :</span>
        <span class="text-subtitle1">{{ timezone.offset }}</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const timezones = [
  {
    name: 'UTC',
    offset: '+00:00'
  },
  {
    name: 'EST',
    offset: '-05:00'
  },
  {
    name: 'CST',
    offset: '-06:00'
  },
  {
    name: 'MST',
    offset: '-07:00'
  },
  {
    name: 'PST',
    offset: '-08:00'
  },
  {
    name: 'HST',
    offset: '-10:00'
  },
  {
    name: 'GMT',
    offset: '+00:00'
  },
  {
    name: 'CET',
    offset: '+01:00'
  },
  {
    name: 'EET',
    offset: '+02:00'
  },
  {
    name: 'MSK',
    offset: '+03:00'
  },
  {
    name: 'JST',
    offset: '+09:00'
  },
  {
    name: 'AEDT',
    offset: '+11:00'
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