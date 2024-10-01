<template>
  <!-- <div class="q-pa-md"> -->
  <q-layout view="hHh Lpr lff">
    <q-header :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <BaseSideBar />
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias
          a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos
          numquam rerum delectus commodi perferendis voluptate?
        </p>
      </q-page>
    </q-page-container>
  </q-layout>
  <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue'
import BaseSideBar from './BaseSideBar.vue'

const drawer = ref(true)
</script>
