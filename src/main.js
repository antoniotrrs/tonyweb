import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'

// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icon plugin (needed for <v-icon>)
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(VueGtag, {
  property: {
    id: 'G-C46GHMNNV6',
  }
})

app.mount('#app')
