<template>
  <div>
    <q-card class="q-mx-auto q-mt-xl" style="max-width: 550px; height: 300px;">
      <q-card-section>
        <div class="q-pa-md">
          <p class="text-h4 text-center welcome-text text-bold q-mb-xl">Do you need help? Get in contact with us!</p>
          <div class="q-mt-lg text-center">
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-instagram"
              @click="openLink('https://www.instagram.com/filipegdev/')"
              class="q-mr-md"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-github"
              @click="openLink('https://github.com/FilipeGDPC')"
              class="q-mr-md"
            />
            <q-btn
              flat
              round
              color="primary"
              icon="mdi-email"
              @click="openLink('mailto:filipegama2411@gmail.com')"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const openLink = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.text-bold {
  font-weight: bold;
}

.welcome-text {
  font-size: 2rem;
}
</style>