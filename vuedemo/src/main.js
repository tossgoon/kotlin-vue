// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD

import './directives/index.js' // directives register
import './plugins/plugins.js' // plugins register

import Api from './plugins/api/api.js' // customize route
import axios from 'axios'

export default ({ app }, inject) => {
  app.$api = Api
  app.$axios = axios
}

=======
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import './directives/index.js'
import './plugins/plugins.js'

import Api from './plugins/api/api.js' // customize route

>>>>>>> aa33488623aad5f6435721d80ee4082aae8c968b
let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
  }
}
Vue.use(main)

<<<<<<< HEAD
=======
export default ({ app }, inject) => {
  app.$api = Api
}

>>>>>>> aa33488623aad5f6435721d80ee4082aae8c968b
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
