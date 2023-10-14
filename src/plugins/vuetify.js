import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      account: 'mdi-account',
      github: 'mdi-github',
      insta: 'mdi-instagram',
      apple: 'mdi-apple',
      linkd: 'mdi-linkedin',
      iphone: 'mdi-cellphone',
      ipad: 'mdi-tablet',
      web: 'mdi-xml',
      shop: 'mdi-cart',
    },
  },
});
