import Vue from 'vue'
import Api from '~/assets/js/api/api.js'
import axios from 'axios'
import PaginationNav from 'bootstrap-vue'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(PaginationNav)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let main = {
  install(Vue) {
    Vue.prototype.$api = Api
    Vue.prototype.$axios = axios
    Vue.prototype.$pageIndex = 0
    Vue.prototype.$pageSize = 10
  }
}
Vue.use(main)

export default ({ app }, inject) => {
  app.$api = Api
  app.$axios = axios
  app.$pageIndex = 0
  app.$pageSize = 10
  app.$currentPage = 1
}
