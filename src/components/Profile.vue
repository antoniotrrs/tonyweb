<template>

  
    <v-container fluid class=" position-relative height-parent">
      <v-row class="position-absolute left-0 right-0 top-mobile ma-0" style="min-height: 45rem;">
        <v-col cols="12" sm="5" style="background-color: #daeced;"></v-col>
      </v-row>
      <v-row class="position-absolute ma-0 mt-5" justify="center">
        <v-col cols="10" sm="5" md="4" lg="3" class="text-center">
          <v-card class="pa-5 rounded-0 d-flex flex-column align-center" elevation="6" >
              <v-avatar size="200" class="mx-auto my-5">
                <v-img src="img/tony_torres2.jpeg" alt="Antonio Torres" />
              </v-avatar>

              <h2 class="my-5">{{ name }}</h2>
              <v-divider
                :thickness="2"
                class="border-opacity-100"
                color="primary"
                width="50"
              ></v-divider>
              <h4 class="mt-5 font-weight-regular">{{ job }}</h4>
              <h4 class="font-weight-regular">📍 Dublin, Ireland</h4>
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
            <v-col cols="10" md="5" sm="5" lg="4" class="d-flex flex-column justify-center">
              <h1 class="text-h3 font-weight-medium">{{ title }}</h1>
              <v-row class="flex-0-0 my-5">
                <v-col cols="6" sm="4">
                  <v-btn
                color="primary"
                href="/doc/webcv_en.pdf"
                target="_blank"
                rounded="xl"
                block>
                 Resume
                </v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-btn
                    color="primary"
                    href="mailto:hi.tonytorres@gmail.com"
                    target="_blank"
                    variant="outlined"
                    rounded="xl"
                    block>
                  Contact
                </v-btn>
                </v-col>
              </v-row>
              <div style="font-size: 15px;" v-html="aboutme"></div>
          </v-col>
        </v-row>
      
    </v-container>

</template>

<script setup>
import { profileConstants } from '@/constants/theme.js'

const { name , title , description , socialLinks, job } = profileConstants
const aboutme = description.replace(/\n/g, '<br>');

</script>
<style scoped>
.top-mobile {
  top: auto; /* default for non-mobile */
}

.height-parent {
  min-height: 45rem;
}

@media (max-width: 600px) {
  .top-mobile {
    top: 400px;
  }

  .height-parent {
    min-height: calc(400px + 700px);
  }
}
</style>