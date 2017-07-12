import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint);
Vue.use({ router: router });
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});