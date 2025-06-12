<template>
  <v-app>

    <v-app-bar :elevation="0" :height="100">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12" class="align-center d-none d-sm-flex"> <h2> {{ profileConstants.name }}</h2><h3 class="ml-3 font-weight-regular"> <label>/</label> {{ profileConstants.job }}</h3></v-col>
              <v-col cols="12"  class="pb-0 d-flex d-sm-none"> <h2> {{ profileConstants.name }}</h2> </v-col>
              <v-col cols="12"  class="pt-0 d-flex d-sm-none"><h3 class="ml-3 font-weight-regular"> {{ profileConstants.job }}</h3></v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="d-flex justify-end align-center">
            <router-link to="/" class="mx-3 text-decoration-none text-blue-grey-darken-2" style="font-size: 14px;"> Home </router-link>
            <router-link to="/about" class="mx-3 text-decoration-none text-blue-grey-darken-2" style="font-size: 14px;"> Projects </router-link>
          </v-col>
        </v-row>
        
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
      <MainFooter />
    </v-main>
  
  </v-app>
</template>

<script setup>
import { profileConstants } from '@/constants/theme.js';
import MainFooter from '@/components/MainFooter.vue';
</script>
