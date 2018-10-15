import Vue from 'vue'
import Api from '~/assets/js/api/api.js'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import pagination from '~/docs/components/pagination/index.js'

Vue.use(BootstrapVue)
Vue.use(pagination)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
  app.$axios = axios
}
