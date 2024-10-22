<template>
  <div class="row justify-center q-gutter-md q-mt-xl">
    <q-card v-for="timezone in timezones" :key="timezone.name" class="col-3 timezone-card">
      <q-card-section class="flex justify-between">
        <span class="text-h5">{{ timezone.name }} :</span>
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
.timezone-card {
  border: 1px solid black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  padding: 16px;
  transition: transform 0.2s;
}

.timezone-card:hover {
  transform: translateY(-5px);
}

.text-h5 {
  font-weight: bold;
}

.text-subtitle1 {
  color: #555;
}
</style>