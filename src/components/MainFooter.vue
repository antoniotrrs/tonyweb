<template>
    <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
    
    <div class="flex-1-0-100 text-center mt-2">
        <v-row>
            <v-col cols="12" sm="4">
                <h5>Antonio</h5>
                <a href="/" class="text-decoration-none text-black" style="font-size: 14px;">Home</a><br>
                <a href="/about" class="text-decoration-none text-black" style="font-size: 14px;">Resume</a><br>
                <a href="/" class="text-decoration-none text-black" style="font-size: 14px;">Apps</a>
            </v-col>
            <v-col cols="12" sm="4">
                <h5>Contact</h5>
                <a href="mailto:hi.tonytorres@gmail.com" style="font-size: 14px; color: black; text-decoration: none;">hi.tonytorres@gmail.com</a>
            </v-col>
            <v-col cols="12" sm="4">
                <h5>Tony Online</h5>
                <v-btn
                  v-for="link in socialLinks"
                  :key="link.icon"
                  :href="link.url"
                  target="_blank"
                  class="mx-1"
                  variant="plain">
                    <v-icon size="large">{{ link.icon }}</v-icon>
                  </v-btn>
            </v-col>
        </v-row>
      <h5>Antonio Torres © {{ new Date().getFullYear() }} | Powered by Vue.js</h5>
    </div>
  </v-footer>
</template>

<script setup>
import { profileConstants } from '@/constants/theme.js'

const { socialLinks } = profileConstants

</script>
