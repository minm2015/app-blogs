import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import VueResource from 'vue-resource'
/* public style */
import './assets/css/amazeui.min.css'
import './assets/css/app.css'
require('amazeui')
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
