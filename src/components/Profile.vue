<template>

  
    <v-container fluid class=" position-relative">
      <v-row class="position-absolute left-0 right-0 top-mobile" style="min-height: 40rem;">
        <v-col cols="12" md="5" style="background-color: #daeced;"></v-col>
      </v-row>
      <v-row class="position-absolute w-100" justify="center">
        <v-col cols="10" md="3" class="text-center">
          <v-card class="pa-5 rounded-0 d-flex flex-column align-center" elevation="6" >
              <v-avatar size="200" class="mx-auto my-5">
                <v-img src="img/tony_torres.jpg" alt="Antonio Torres" />
              </v-avatar>

              <h2 class="my-5">{{ name }}</h2>
              <v-divider
                :thickness="2"
                class="border-opacity-100"
                color="primary"
                width="50"
              ></v-divider>
              <h3 class="my-5 font-weight-regular">{{ job }}</h3>
              <div class="mt-5 mb-3">
                <v-btn
                  v-for="link in socialLinks"
                  :key="link.icon"
                  :href="link.url"
                  target="_blank"
                  class="mx-1"
                  variant="plain">
                    <v-icon size="large">{{ link.icon }}</v-icon>
                  </v-btn>
              </div>
            </v-card>
            </v-col>
            <v-col cols="10" md="4" class="d-flex flex-column justify-center">
              <h1 class="text-h3 font-weight-medium">{{ title }}</h1>
              <v-row class="flex-0-0 my-5">
                <v-col cols="6">
                  <v-btn
                color="primary"
                href="/doc/webcv_en.pdf"
                target="_blank"
                rounded="xl"
                block>
                 Resume
                </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    color="primary"
                    href="mailto:luisato.trrs@gmail.com"
                    target="_blank"
                    variant="outlined"
                    rounded="xl"
                    block>
                  apps
                </v-btn>
                </v-col>
              </v-row>
              <p class="text-body-1 mt-2">{{ description }}</p>
          </v-col>
        </v-row>
      
    </v-container>

  



 
</template>

<script setup>
import { profileConstants } from '@/constants/theme.js'

const { name , title , description , socialLinks, job } = profileConstants

</script>
<style scoped>
.top-mobile {
  top: auto; /* default for non-mobile */
}

@media (max-width: 600px) {
  .top-mobile {
    top: 400px;
  }
}
</style>