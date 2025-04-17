import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(VueGtag, {
  property: {
    id: 'G-C46GHMNNV6',
  }
})

app.mount('#app')
