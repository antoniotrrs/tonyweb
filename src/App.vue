<template>
  <v-app>

    <v-app-bar :elevation="0" :height="100">
      <v-container>
        <v-row>
          <v-col class="d-flex align-center">
            <h2> {{ profileConstants.name }}</h2><h3 class="ml-3 font-weight-regular"> / {{ profileConstants.job }}</h3>
          </v-col>
          <v-col class="d-flex justify-end">
            <router-link to="/" class="mx-3"> Home </router-link>
            <router-link to="/about" class="mx-3 "> Projects </router-link>
          </v-col>
        </v-row>
        
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { profileConstants } from '@/constants/theme.js';

</script>
