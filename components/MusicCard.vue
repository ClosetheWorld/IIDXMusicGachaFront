<template>
  <v-row dense class="result">
    <v-col md="12" class="ml-md-auto">
      <template>
        <v-card class="pa-2">
          <v-card-title> {{ title }} </v-card-title>
          <v-card-subtitle> {{ artist }} </v-card-subtitle>
          <v-card-text>
            <div>ジャンル: {{ genre }}</div>
            <div>BPM: {{ bpm }}</div>
          </v-card-text>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    artist: {
      type: String,
      default: '',
    },
    genre: {
      type: String,
      default: '',
    },
    bpm: {
      type: Number,
      default: 0,
    },
  },
})
</script>
