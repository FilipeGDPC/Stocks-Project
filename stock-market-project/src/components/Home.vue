<template>
  <div class="text-center text-white q-pa-md">
    <p class="text-h4 q-mb-md">Welcome to our financial data consultation platform!</p>

    <p class="text-h6 q-mb-md">On our site, you can easily access detailed information about the financial markets with
      just a few clicks. Powered by the Marketstack APIs, we offer a reliable and user-friendly platform where you
      can perform free consultations on a wide range of data, including currencies, stock exchanges, time zones,
      and more.
    </p>

    <p class="text-h6 q-mb-md">We believe that having access to accurate financial data is key to making informed
      decisions. That’s why we ensure that all queries made through our site are based on precise, up-to-date
      information from one of the most trusted sources in the industry. Explore and take advantage of having
      essential financial data like currency rates, exchange details, and global market insights at your
      fingertips—completely free of charge!
    </p>

    <div class="q-mt-xl">
      <q-btn color="black" label="Get Started" @click="showModal = true" />
    </div>

    <q-dialog v-model="showModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Get Started</div>
        </q-card-section>

        <q-card-section>
          <q-btn color="black" label="Currencies" @click="goToRoute('currencies')" class="q-mb-sm" />
          <q-btn color="black" label="Exchanges" @click="goToRoute('exchanges')" class="q-mb-sm" />
          <q-btn color="black" label="Global Stock Market" @click="goToRoute('global-stock-market')" class="q-mb-sm" />
          <q-btn color="black" label="Historical Data" @click="goToRoute('historical-data')" class="q-mb-sm" />
          <q-btn color="black" label="Time Zones" @click="goToRoute('timezones')" class="q-mb-sm" />
          <q-btn color="black" label="Help" @click="goToRoute('help')" class="q-mb-sm" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showModal = ref(false);

const goToRoute = (routeName) => {
  showModal.value = false;
  router.push({ name: routeName });
};
</script>

<style scoped>
.text-white {
  color: white;
}
</style>