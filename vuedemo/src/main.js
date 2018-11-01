// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import './directives/index.js'
import './plugins/plugins.js'

import Api from './plugins/api/api.js' // customize route

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
