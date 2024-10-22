<template>
  <div>
    <q-card class="q-mx-auto q-mt-xl q-card-underline" style="max-width: 500px; height: 500px;"> 
      <q-card-section>
        <div class="q-pa-lg">
          <p class="text-h4 text-center welcome-text text-bold q-mb-xl">Do you need any help? Get in contact with us!</p>
          <div class="q-mt-lg text-center">
            <q-btn flat round class="q-mx-lg" @click="router.push('https://www.instagram.com/filipegdev/')">
              <q-avatar size="42px">
                <img src="../assets/img/instagram.svg">
              </q-avatar>
            </q-btn>
            <q-btn flat round class="q-mx-lg" @click="router.push('https://github.com/FilipeGDPC')">
              <q-avatar size="42px">
                <img src="../assets/img/github.svg">
              </q-avatar>
            </q-btn>
            <q-btn flat round class="q-mx-lg" @click="router.push('http://filipegama2411@gmail.com')">
              <q-avatar size="42px">
                <img src="../assets/img/gmail.svg">
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>
.text-bold {
  font-weight: bold;
}

.welcome-text {
  font-size: 2rem;
  height: 150px;
}

.q-card-underline {
  border: 1px solid rgb(142, 125, 125);
}
</style>